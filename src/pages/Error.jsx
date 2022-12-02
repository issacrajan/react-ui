import React from 'react';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='error' />
        <h3>text</h3>
        <p>text</p>
        <Link to='/'>To Home Page</Link>
      </div>
    </Wrapper>
  );
};

export default Error;
