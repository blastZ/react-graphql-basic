import React from 'react';
import { Link } from 'react-router-dom';

export const Home = (props) => (
  <div className="home-container">
    <Link to="about" className="link-button">Home To About</Link>
  </div>
)