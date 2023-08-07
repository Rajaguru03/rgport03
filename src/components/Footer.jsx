import React from 'react';
import '../App.css';
import {GitHub, Instagram, LinkedIn} from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
      <div>
           <footer className="footer">
                <div className="container">
                <h3>Stay Connected</h3>
                <p>"The greatest gift you can give someone is your time because when you give your time, you are giving a portion<br/> of your life that you can never get back."</p>
                <div className="social-links">
                    <a href="https://www.instagram.com/raja_guru03/" className="instagram"><Instagram/> </a>
                    <a href="mailto:rajagurun003@gmail.com"><EmailIcon/></a>
                    <a href="https://github.com/Rajaguru03" className="google-plus"><GitHub/> </a>
                    <a href="https://www.linkedin.com/in/rajagurunataraj/" className="linkedin"><LinkedIn/> </a>
                </div>
                <div className="credits">
                    <p>Designed by Rajaguru Nataraj</p>
                </div>
                </div>
            </footer>
      </div>
  );
}

export default Footer;
