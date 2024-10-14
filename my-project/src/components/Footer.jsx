import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8'>
    <div>
      <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row
    justify-between items-center'>
        <p className='text-gray-400'>
          &copy; {new Date().getFullYear()} Leovi. All rights resserved.
        </p>

        <div className='flex space-x-4 my-4 md:my-0'>
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://www.linkedin.com/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://instagram.com/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://github.com/">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <div className='flex space-x-4'>
          <a href="#" className='text-gray-400 hover:text-white'>
            Privacy
          </a>
          <a href="#" className='text-gray-400 hover:text-white'>
            Terms of Service
          </a>
        </div>
      </div>
    </div>
    </footer>
  );
};

export default Footer;