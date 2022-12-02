import React from 'react';
import { Link } from 'react-router-dom';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Jv <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            adipisci, consequatur, mollitia et blanditiis placeat omnis
            molestiae facere praesentium dignissimos accusantium neque minus in
            accusamus maxime. Facilis velit quae ratione?
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='jv' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
