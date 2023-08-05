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
                                            
                        
                        {/* <div className="map_sec">
                            <Container >
                                <Row>
                                    <Col md={10} className="offset-md-1">
                                        <div className="map_inner">
                                            <h4>Find Us on Google Map</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quo beatae quasi assumenda, expedita aliquam minima tenetur maiores neque incidunt repellat aut voluptas hic dolorem sequi ab porro, quia error.</p>
                                            <div className="map_bind">
                                            <Iframe url='https://www.google.com/maps' width='100%' height='500px' className='mx-auto'/>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div> */}

            
                    </div>
                </Container>
            </div>
      </div>
  );
}

export default Contact;
