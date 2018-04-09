import React from 'react';
import { Link } from 'react-router-dom';

export const Home = ({ sayHello }) => (
  <div className="home-container">
    <Link to="about" className="link-button">Home To About</Link>
    <button onClick={sayHello} className="say-hello-button">Say Hello Async</button>
  </div>
)