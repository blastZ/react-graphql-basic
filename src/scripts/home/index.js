import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(props) {
  return (
    <div>
      <div>Home</div>
      <Link to="/about">To about</Link>
    </div>
  )
}