import React from 'react';
import '../App.css'
import { Container} from 'react-bootstrap';
import { Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import Header from '../components/Header';


function Contact() {

  return(
      <div className='More'>
          <div>
              <Header  disabled={true} />
          </div>
            <div>
                <Container>
                    <div className='cricle1'></div>
                    <div className='cricle2'></div>
                    <div className='contactUs'>
                    <div className="container">
                    <div className="form-container">
                        <div className="left-container">
                        <div className="left-inner-container">
                            <h2>Let's Chat</h2>
                            <p>Whether you have a question, want to start a project or simply want to connect.</p>
                            <p>Feel free to send me a message in the contact form</p>
                            <Instagram className='mx-3 my-4'/>
                            <LinkedIn className='mx-3 my-4'/>
                            <Twitter className='mx-3 my-4'/>
                        </div>
                        </div>
                        <div className="right-container">
                        <div className="right-inner-container">
                            <form action="#">
                                <h2 className="lg-view">Contact</h2>
                                <h2 className="sm-view">Let's Chat</h2>
                                <br/>
                                <input type="text" placeholder="Name *"  />
                                <input type="email" placeholder="Email *" />
                                <input type="phone" placeholder="Phone" />
                                <textarea rows="4" placeholder="Message"></textarea>
                                <button className='C-btn my-4'>Submit</button>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </Container>
            </div>
      </div>
  );
}

export default Contact;
