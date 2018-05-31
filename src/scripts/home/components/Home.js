import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const axiosGithubGraphql = axios.create({
  baseURL: 'https://api.github.com/graphql',
  headers: {
    Authorization: `bearer ${
      process.env['GITHUB_ACCESS_KEY']
    }`
  }
})

class Home extends Component {
  state = {
    path: 'the-road-to-learn-react/the-road-to-learn-react',
    organization: null,
    errors: null,
    isError: false
  }

  componentDidMount() {
    this.fetchFromGithub();
  }

  fetchFromGithub = () => {
    const { path } = this.state;
    const [organization, repository] = path.split('/');
    axiosGithubGraphql 
      .post('', {
        query: GET_REPO_OF_ORGANIZATION,
        variables: {organization, repository}
      })
      .then((result) => {
        this.setState(() => ({
          organization: result.data.data.organization || null,
          errors: result.data.errors || null
        }))
      })
  }

  onChange = (e) => {
    this.setState({
      path: e.target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.fetchFromGithub();
  }

  componentDidCatch(error, errorInfo) {
    this.setState(() => ({
      isError: true
    }))
  }

  render() {
    const { isError, path, organization, errors } = this.state;
    if(isError) return <div style={{
      position: 'absolute',
      left: 0, top: 0,
      width: '100vw', height: '100vh',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'
    }}><h1>Error=n=</h1><button onClick={() => window.location.reload()}>Go Back</button></div>;
    return (
      <div style={{padding: 32}}>
        <h1>React GraphQL Test</h1>
        <form onSubmit={this.onSubmit}>
          <label htmlFor="url">
            Show open issues for https://github.com/
          </label>
          <input
            value={path}
            id="url"
            type="text"
            onChange={this.onChange}
            style={{width: 300}}
          />
          <button type="submit">Search</button>
        </form>
        <hr style={{marginTop: 32}} />
        {organization
          ? <Organization organization={organization} errors={errors} />
          : <p>No information yet.</p>
        }
        <div>{errors}</div>
      </div>
    )
  }
}

export default Home;

const Organization = ({ organization, errors }) => {
  if(errors) {
    return (
      <p>
        <strong>Something went wrong:</strong>
        {errors.map(error => error.message).join(' ')}
      </p>
    )
  }
  
  return <div>
    <p>
      <strong>Issues from Organization:</strong>
      <a href={organization.url}>{organization.name}</a>
    </p>
    <Repository repository={organization.repository} />
  </div>
}

const Repository = ({ repository }) => (
  <div>
    <p>
      <strong>In Repository:</strong>
      <a href={repository.url}>{repository.name}</a>
    </p>
    <ul>
      {repository.issues.edges.map(({ node }) => (
        <li key={node.id}>
          <a href={node.url}>{node.title}</a>
        </li>
      ))}
    </ul>
  </div>
);

const GET_REPO_OF_ORGANIZATION = `
  query($organization: String!, $repository: String!) {
    organization(login: $organization) {
      name 
      url
      repository(name: $repository) {
        name
        url
        issues(first: 10) {
          edges {
            node {
              id
              title
              url
            }
          }
        }
      }
    }
  }
`;