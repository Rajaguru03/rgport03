import React from "react";
import '../App.css';
import { HomeOutlined ,  AcUnitOutlined, SendOutlined} from '@mui/icons-material'
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import { Outlet } from "react-router-dom";
import {Link} from 'react-scroll';


function Header() 
    {
             
    return(
        <div>
            
            <header className="header d-flex flex-column justify-content-center">
                <nav id="navbar" className="navbar nav-menu ">
                    <ul>
                        <li><Link to="Hero" spy={true} smooth={true} offset={1} duration={100}  className="nav-link active"><HomeOutlined/><span>Home</span></Link></li>
                        <li><Link to="About" spy={true} smooth={true} offset={1} duration={100}   className="nav-link scrollto">< AcUnitOutlined /> <span>About</span></Link></li>
                        <li><Link to="Resume" spy={true} smooth={true} offset={1} duration={100}   className="nav-link scrollto">< SendOutlined/> <span>Resume</span></Link></li>
                        <li><Link to="Expertise" spy={true} smooth={true} offset={1} duration={100}   className="nav-link scrollto"><BakeryDiningIcon/> <span>Expertise</span></Link></li>
                        <li>
                            {/* <a href='/Connect'><ConnectWithoutContactOutlined/><span>Connect</span></a> */}
                        </li>
                    </ul>
                </nav>
            </header>
            <div>
                <Outlet/>
            </div>
        </div>
    );
}

export default Header;
