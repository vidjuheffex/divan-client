import React from 'react';
import { Helmet } from 'react-helmet';
import {Link} from 'react-router-dom';

const Home = () => (
  <div>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <h1>Home</h1>
    <Link to="/login">Login</Link>
  </div>
);

export default Home;
