import React from 'react'
import '../App.css';
import Typed from 'react-typing-effect';
import { Row, Col,Container} from 'react-bootstrap';
import { GitHub, Instagram, LinkedIn, ArrowRightAltOutlined} from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import { LinearProgress} from '@mui/material'
import RGPics from '../components/assets/img/RGPics.jpeg'
// import '../components/Animation'
import { Parallax } from 'react-parallax';
import Footer from '../components/Footer';
import ResumeBG from '../components/assets/img/resumeBg2.jpg'
import PerfectlyAni from '../components/PerfectlyAni';
import Rajaguru_Resume from '../components/assets/Resume/Rajaguru_Resume.pdf'

function Root() {

  
  return (
    <>

    <div className='Root'>
      <div className='Non-parallex'>
      <div className='heroImg'></div>
      {/******************************* TOP CONTAINER *************************************/}
      <div className="Hero d-flex flex-column justify-content-center">
        <div className='HeroBG'>
          
          <div className="container profileName"> 
            <h1>Rajaguru Nataraj</h1>          
            <Typed
              className='typed-text'
              text={["Web Designer", "Web Developer"]}
              speed={100}
              eraseSpeed={100}
            /> 
            <div className="social-links">
              <a href="https://www.instagram.com/raja_guru03/" className="instagram"><Instagram/></a>
              <a href="https://github.com/Rajaguru03" className="github"><GitHub/> </a>          
              <a href="https://www.linkedin.com/in/rajaguru-nataraj-836523202/" className="linkedin"><LinkedIn/> </a> 
              <a href="mailto:www.rajagurun003@gmail.com"><EmailIcon/></a>
            </div>
            <div className='scrolldown'>
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
                    <img src={RGPics} alt='none'/>
                  </div>
                </div>
              </div>
            </div>
            <p>Hey..!! I'm Rajaguru Nataraj</p>
          </div>
          <div >
            <div className="text-center content">
              <div></div>
              <h3>Web Developer &amp; UI/UX Designer</h3>
              <br/>
              <p>I am currently studying computer science and engineering at "SNS college of technology". Throughout my studies, I have had the opportunity to develop my skills and work experience, which have given me valuable experience and insights into web application Deveploment. I'm passionate about creating intuitive and engaging user experiences through web design and development. I am always eager to learn new things and to take on new challenges, and m always looking for new ways to improve my skills and stay up-to-date with the latest trends and technologies. I'm passionate about using my skills and experience to lead a healthy mission.</p>
              <div className='contentId my-5 d-flex align-item-center justify-content-around'>
                  <ul>
                    <li><strong>Birthday:</strong><p>03 Nov 2002</p></li>
                    <li><strong>Phone:</strong><p>+91 95005 11202</p></li>
                  </ul>              
                  <ul>
                    <li><strong>Location:</strong><p>Coimbatore, India</p></li>
                    <li><strong>Email:</strong><p>rajagurun003@gmail.com</p></li>
                  </ul>                
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/********************************* SKILL *************************************/}
      <PerfectlyAni/>
      <div className='skillsBg'>
          <section id="skills" className="skills section-bg">
            <div className="container" >
                <div className="section-title">
                <h2>Skills</h2>
                <p>I am passionate about my ability to learn and develop more skills, and am always seeking new challenges and opportunities to learn and grow. Please feel free to browse my portfolio to see some of my work and accomplishments.</p>
                </div>
                <div className="row skills-content">
                <div className="col-lg-6">
                    <div className="progress">
                    <span className="skill">React js<i className="val">90%</i></span>
                    <div className="progress-bar-wrap">
                        <LinearProgress color='inherit' value={100} />
                    </div>
                    </div>
                    <div className="progress">
                    <span className="skill">Node js<i className="val">80%</i></span>
                    <div className="progress-bar-wrap">
                        <LinearProgress color='inherit' value={80} />
                    </div>
                    </div>
                    <div className="progress">
                    <span className="skill">sql <i className="val">75%</i></span>
                    <div className="progress-bar-wrap">
                        <LinearProgress color='inherit' value={75} />
                    </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="progress">
                    <span className="skill"> version control system (Git, GitHub) <i className="val">80%</i></span>
                    <div className="progress-bar-wrap">
                        <LinearProgress color='inherit' value={80} />
                    </div>
                    </div>
                    <div className="progress">
                    <span className="skill">UI/UX Design <i className="val">90%</i></span>
                        <LinearProgress color='inherit' value={90} />
                    </div>
                    <div className="progress">
                    <span className="skill">Python<i className="val">65%</i></span>
                    <div className="progress-bar-wrap">
                    <LinearProgress color='inherit' value={65} />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
      </div>

      {/********************************* RESUME *************************************/}
      <div >
      <Parallax className='resumeBg' strength={600} bgImage={ResumeBG}>
            <section id="Resume" className="resume">
                <div className="container" >

                    <div className="section-title">
                    <h2>Resume</h2>
                    <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
                    <div className="col-lg-6">
                        <h3 className="resume-title">Sumary</h3>
                        <div className="resume-item ">
                        <h4>Rajaguru Nataraj</h4>
                        <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                        <ul>
                            <li>Portland par 127,Orlando, FL</li>
                            <li>+91 9500511202</li>
                            <li>rajagurun003@gmail.com</li>
                        </ul>
                        </div>

                        <h3 className="resume-title">Education</h3>
                        <div className="resume-item">
                        <h4>Master of Fine Arts &amp; Graphic Design</h4>
                        <h5>2015 - 2016</h5>
                        <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                        <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p>
                        </div>
                        <div className="resume-item">
                        <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                        <h5>2010 - 2014</h5>
                        <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                        <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
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
                          <h4>Graphic design specialist</h4>
                          <h5>2017 - 2018</h5>
                          <p><em>Stepping Stone Advertising, New York, NY</em></p>
                          <ul>
                              <li>Developed numerous marketing programs (logos, brochures,infographics, presentations, and advertisements).</li>
                              <li>Managed up to 5 projects or tasks at a given time while under pressure</li>
                              <li>Recommended and consulted with clients on the most appropriate graphic design</li>
                              <li>Created 4+ design presentations and proposals a month for clients and account managers</li>
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
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                <div className="icon-box iconbox-blue">
                <div className="icon">
                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,521.0016835830174C376.1290562159157,517.8887921683347,466.0731472004068,529.7835943286574,510.70327084640275,468.03025145048787C554.3714126377745,407.6079735673963,508.03601936045806,328.9844924480964,491.2728898941984,256.3432110539036C474.5976632858925,184.082847569629,479.9380746630129,96.60480741107993,416.23090153303,58.64404602377083C348.86323505073057,18.502131276798302,261.93793281208167,40.57373210992963,193.5410806939664,78.93577620505333C130.42746243093433,114.334589627462,98.30271207620316,179.96522072025542,76.75703585869454,249.04625023123273C51.97151888228291,328.5150500222984,13.704378332031375,421.85034740162234,66.52175969318436,486.19268352777647C119.04800174914682,550.1803526380478,217.28368757567262,524.383925680826,300,521.0016835830174"></path>
                    </svg>
                </div>
                <h4>MERN Stack</h4>
                <p>“There are three responses to a piece of design – yes, no, and WOW! Wow is the one to aim for”</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                <div className="icon-box iconbox-orange ">
                <div className="icon">
                    <svg width="100" height="100" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
                      <path stroke="none" stroke-width="0" fill="#f5f5f5" d="M300,582.0697525312426C382.5290701553225,586.8405444964366,449.9789794690241,525.3245884688669,502.5850820975895,461.55621195738473C556.606425686781,396.0723002908107,615.8543463187945,314.28637112970534,586.6730223649479,234.56875336149918C558.9533121215079,158.8439757836574,454.9685369536778,164.00468322053177,381.49747125262974,130.76875717737553C312.15926192815925,99.40240125094834,248.97055460311594,18.661163978235184,179.8680185752513,50.54337015887873C110.5421016452524,82.52863877960104,119.82277516462835,180.83849132639028,109.12597500060166,256.43424936330496C100.08760227029461,320.3096726198365,92.17705696193138,384.0621239912766,124.79988738764834,439.7174275375508C164.83382741302287,508.01625554203684,220.96474134820875,577.5009287672846,300,582.0697525312426"></path>
                    </svg>                   
                </div>
                <h4>UI & UX Design</h4>
                <p>“UI is the saddle, the stirrups, & the reins. UX is the feeling you get being able to ride the horse.”</p>
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
      <div className='Enter'>
        <Container>
          <Row className='E-content mx-auto d-flex align-items-center'>
              <Col md={8} lg={8} className='E-text'>
                <h1>Wanna to know more</h1>
                <p>Then download my CV to know my passion <ArrowRightAltOutlined/></p>
              </Col>
              <Col  md={4} className='d-flex justify-content-end'>
                <div className='E-btn text-center'>
                  <a href={Rajaguru_Resume} download={true} target="_blank" rel="noreferrer">
                    <p>Download Here</p>
                  </a>
                </div>
              </Col>
          </Row>
        </Container>
      </div>     

      {/********************************* FOOTER *************************************/}      

      <Footer/>

    </div>
    </>
  )
}

export default Root