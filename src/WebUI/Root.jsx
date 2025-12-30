import React from 'react'
import '../App.css';
import Typed from 'react-typing-effect';
import { Row, Col, Container } from 'react-bootstrap';
import { GitHub, Instagram, LinkedIn, ArrowRightAltOutlined } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import { LinearProgress } from '@mui/material'
import RGPic_ from '../components/assets/img/RGpic.png'
import ParticleContainer from '../components/Animation'
import { Parallax } from 'react-parallax';
import Footer from '../components/Footer';
import ResumeBG from '../components/assets/img/resumeBg2.jpg'
import PerfectlyAni from '../components/PerfectlyAni';
import Rajaguru_Resume from '../components/assets/Resume/Resume~.pdf'

function Root() {

  return ( 
    <>
      <ParticleContainer />
      <div className='Root'>
        <div className='Non-parallex'>
          <div className='heroImg'></div>
          {/******************************* TOP CONTAINER *************************************/}
          <div className="Hero d-flex flex-column justify-content-center">
            <div className='HeroBG'>

              <div className="container profileName">
                <h1>Rajaguru Nataraj</h1>
                <div className='typed-text'>
                <p>Web~</p>
                <Typed
                  className=''
                  text={["Tester", "Developer"]}
                  speed={100}
                  eraseSpeed={100}
                  eraseDelay={500}
                  typingDelay={500}
                />
                </div>
                <div className="social-links">
                  <a href="https://www.instagram.com/raja_guru03/"><Instagram /></a>
                  <a href="https://github.com/Rajaguru03"><GitHub /> </a>
                  <a href="https://www.linkedin.com/in/rajagurunataraj/"><LinkedIn /> </a>
                  <a href="mailto:rajagurunataraj003@gmail.com"><EmailIcon /></a>
                </div>
                <div data-aos="zoom-in-down" className='scrolldown'>
                  <div class="mouse_scroll">
                    <div class="mouse">
                      <div class="wheel"></div>
                    </div>
                    <div>
                      <span class="m_scroll_arrows unu"></span>
                      <span class="m_scroll_arrows doi"></span>
                      <span class="m_scroll_arrows trei"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/******************************* ABOUT *************************************/}

          <div id="About" className="about py-5 my-5">
            <div className="container">
              <div className="RGTitle">
                <h2>About</h2>
                <div className='RGPic'>
                  <div>
                    <div class="outer-circle">
                      <div class="inner-circle">
                        <img src={RGPic_} alt='none' />
                      </div>
                    </div>
                  </div>
                </div>
                <p>Hey! I'm <span style={{fontFamily:"Brush Script MT, Brush Script Std, cursive"}}>Rajaguru Nataraj</span></p>
              </div>
              <div >
                <div className="text-center content">
                  <div></div>
                  <h3>Web Craftsman &amp; Performance Validator</h3>
                  <br/>
                  <p>Motivated and hands on Cyber Security student pursuing a master's in cyber security and strong foundational knowledge in risk management, threat analysis and incident response. Experienced in working with real-world attack simulations via platforms like TryHackMe and Hack the Box. Continuously building skills in SIEM, vulnerability scanning, and security frameworks. I am a fast learner with strong communication skills, eager to join a dynamic team and contribute to protecting digital assets and enhancing security posture.</p>
                  <div data-aos="zoom-in" className='contentId my-5 d-flex align-item-center justify-content-around'>
                    <ul>
                      <li><strong>Birthday:</strong><p>03 Nov 2002</p></li>
                      <li><strong>Reach Out:</strong><p>+44 74230 86178</p></li>
                    </ul>
                    <ul>
                      <li><strong>Locality:</strong><p>United Kingdom</p></li>
                      <li><strong>Email:</strong><p>rajagurunataraj003@gmail.com</p></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/********************************* Perfectly Animiation *************************************/}
        <PerfectlyAni />
        {/********************************* SKILL *************************************/}
        <div className='skillsBg' data-aos="fade-up" data-aos-duration="1000" >
          <section id="skills" className="skills section-bg">
            <div className="container" >
              <div className="section-title">
                <h2>Specializations</h2>
                <p>I am passionate about my ability to learn and develop more skills, and am always seeking new challenges and opportunities to learn and grow. Please feel free to browse my portfolio to see some of my work and accomplishments.</p>
              </div>
              <div className="row skills-content">
                <div className="col-lg-6">
                  <div className="progress">
                    <span className="skill">Threat knowledge<i className="val">90%</i></span>
                    <div className="progress-bar-wrap">
                      <LinearProgress variant='determinate' color='inherit' value={90} />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">Burp suite (testing tool)<i className="val">90%</i></span>
                    <div className="progress-bar-wrap">
                      <LinearProgress variant='determinate' color='inherit' value={90} />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">sql<i className="val">75%</i></span>
                    <div className="progress-bar-wrap">
                      <LinearProgress variant='determinate' color='inherit' value={75} />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="progress">
                    <span className="skill"> React js<i className="val">80%</i></span>
                    <div className="progress-bar-wrap">
                      <LinearProgress variant='determinate' color='inherit' value={80} />
                    </div>
                  </div>
                  <div className="progress">
                    <span className="skill">Linux<i className="val">90%</i></span>
                    <LinearProgress variant='determinate' color='inherit' value={90} />
                  </div>
                  <div className="progress">
                    <span className="skill">Python<i className="val">75%</i></span>
                    <div className="progress-bar-wrap">
                      <LinearProgress variant='determinate' color='inherit' value={75} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/********************************* RESUME *************************************/}
        <div>
          <Parallax className='resumeBg' strength={600} bgImage={ResumeBG}>
            <section id="Resume" className="resume">
              <div className="container" >

                <div className="section-title">
                  <h2>Resume</h2>
                  <p>Possessing a strong blend of technical expertise, creative problem-solving skills, and a passion for innovation, I am committed to driving impactful results and exceeding expectations. Known for my adaptability, leadership, and collaborative spirit, I thrive in fast-paced environments and excel in cross-functional teams. </p>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <h3 className="resume-title">Sumary</h3>
                    <div className="resume-item ">
                      <h4>Rajaguru Nataraj</h4>
                      <p><em>Devoted and skilled individual with a unique fusion of expertise in penetration
testing and React.js development. Showcasing a commendable track record in
the precise identification and mitigation of security vulnerabilities, all while
ensuring the delivery of exceptional, responsive web applications.</em></p>
                      <ul>
                        <li>rajagurun003@gmail.com</li>
                        <li>United Kingdom</li>
                        <li>+44 74230 86178</li>
                      </ul>
                    </div>

                    <h3 className="resume-title">Education</h3>
                    <div className="resume-item">
                      <h4>POSTGRADUATE</h4>
                      <h5>2025 - 2026</h5>
                      <p><em>University Of Aberdeen, United Kingdom</em></p>
                      {/* <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p> */}
                    </div>
                    <div className="resume-item">
                      <h4>UNDERGRADUATE</h4>
                      <h5>2020 - 2024</h5>
                      <p><em>SNS College of Technology, India</em></p>
                      {/* <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p> */}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <h3 className="resume-title">PROJECTS</h3>
                    <div className="resume-item">
                      <h4>Eye cursor</h4>
                      <p><em><a href='https://github.com/Rajaguru03/Python/blob/main/eyeCursor.py'>https://github.com/Rajaguru03/Python/blob/main/eyeCursor.py</a></em></p>
                      <ul>
                        <li>The idea of eye controls of great use to not only the future of natural input but more importantly the handicapped and disabled.</li>
                      </ul>
                    </div>
                    <div className="resume-item">
                      <h4>Snake Game</h4>
                      <p><em><a href='https://snake-game-lemon-pi.vercel.app/'>https://snake-game-lemon-pi.vercel.app/</a></em></p>
                      <ul>
                        <li>A simple snake game is developed using Javascript</li>
                      </ul>
                    </div>
                    <div className="resume-item">
                      <h4>Expense Tracker</h4>
                      <p><em><a href='https://github.com/Rajaguru03/ExpensesTracker.git'>https://github.com/Rajaguru03/ExpensesTracker.git</a></em></p>
                      <ul>
                        <li>Project to track monthly expenses which was developed using MERN stack</li>
                      </ul>
                    </div>
                    <div className="resume-item">
                      <h4>Personal web portfolio</h4>
                      <p><em><a href='https://rgport03.vercel.app/'>https://rgport03.vercel.app/</a></em></p>
                      <ul>
                        <li>A portfolio is a powerful tool to display your accomplishments, creativity, and capabilities, making it an essential asset in various professional endeavors.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Parallax>
        </div>
        {/********************************* EXPERTISE *************************************/}

        <div>
          <section id="Expertise" className="Expertise">
            <div className="container" >
              <div className="section-title">
                <h2>expertise</h2>
                <p>People who have expertise just love to share it. That's human nature.</p>
              </div>
              <div className="row justify-content-evenly">
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="fade-right">
                  <div className="icon-box iconbox-blue">
                    <div className="icon">
                      <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                      </svg>
                    </div>
                    <h4>Penetration Testing </h4>
                    <p>“The art of thinking like a hacker to outsmart potential threats, ensuring that your defenses are as strong as your intentions”</p>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-left">
                  <div className="icon-box iconbox-orange ">
                    <div className="icon">
                      <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                        <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
                      </svg>
                    </div>
                    <h4>MERN Stack</h4>
                    <p>“There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for”</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/********************************* FACT *************************************/}

        <div className='factBG'>

          <div id="facts" className="facts mt-5">
            <div className="container">

              <div className="section-title">
                <h2>Words of wisdom</h2>

                <div className='sectionFact'>
                  <p className='mt-5'>"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful." </p>
                  <p className='mt-5'> - Albert Schweitzer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/********************************* DownloadCV *************************************/}
        <div data-aos="zoom-in" className='Enter'>
          <Container>
            <Row className='E-content mx-auto d-flex align-items-center'>
              <Col md={8} lg={8} className='E-text'>
                <h1>Wanna know more</h1>
                <p>Then download my CV to know my passion <ArrowRightAltOutlined /></p>
              </Col>
              <Col md={4} className='d-flex justify-content-end'>
                <div className='E-btn text-center'>
                  <a href={Rajaguru_Resume} download={true}>
                    <p>Download Here</p>
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/********************************* FOOTER *************************************/}

        <Footer />

      </div>
    </>
  )
}

export default Root