import React, { Component , render} from 'react'
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faEnvelope, faSearch } from '@fortawesome/free-solid-svg-icons'
import Button from 'react-bootstrap/Button';
import {  Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.css";
import { faHouse  } from '@fortawesome/free-solid-svg-icons';
import { faUser  } from '@fortawesome/free-solid-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

function Header(){

    return(
        <div style={{
            height: "9%",
            textAlign: "center", 
            backgroundColor: "lightgray",
          }}
          >
    
    {/* <img style="height:auto;" alt="" src="https://avatars.githubusercontent.com/u/94521881?v=4" width="260" height="260" class="avatar avatar-user width-full border color-bg-default"></img> */}
    
    
    <style type="text/css">
            {`
        .btn-primary {
          background-color: red;
          color: white;
        }
        `}
        </style>
    
        <Row style={{height: "70%", background: "lightgray", display: "flex"}}>
          <Col sm={2}>
          <Link to = {'/'} style={{textDecoration: 'none', color:"black" }} >
                    <div style={{marginTop: "15px"}}>
                    <img src="https://internshala.com//static/images/internshala_og_image.jpg" alt="" width="132px" length = "28px"/>
                    </div>
          </Link>
          </Col>
          <Col sm={3} style={{display:"flex"}} >
    
          {/* <Link to={'/signin'}  >
          <div style={{display:"flex", marginTop:"15%"}}>
    
          <FontAwesomeIcon icon={faHouse} size='xl' />
          <h4>Home</h4>
    
          </div>
          </Link>
    
          <Link to={'/signin'}  >
          <div style={{display:"flex", marginTop:"15%"}}>
    
          <FontAwesomeIcon icon={faUser} size='xl' />
          <h4>About Me</h4>
    
          </div>
          </Link> */}
    
          </Col>
          <Col sm={1} >
         
            
          </Col>
          <Col sm={6} style={{ display: "flex", justifyContent: "space-around" }} >
            <div> 
                <Link to={'/home'} style={{textDecoration: 'none', color:"black" }}  >
                <div style={{display:"flex", marginTop:"15%" }}>
    
                {/* <FontAwesomeIcon icon={faHouse} size='xl' /> */}
                
    
                </div>
                </Link>
            </div>
            <div>
                <Link to={'/jobseeker'} style={{ color:"black" }} >
                <div style={{display:"flex", marginTop:"15%"}}>
    
                {/* <FontAwesomeIcon icon={faUser} size='xl' /> */}
                <h6>For Job Seekers</h6>
                </div>
                </Link>
            </div>
            <div>
                <Link to={'/companies'} style={{  color:"black" }} >
                <div style={{display:"flex", marginTop:"15%"}}>
    
                {/* <FontAwesomeIcon icon={faLaptopCode} size='xl' /> */}
                <h6> For Companies</h6>
    
                </div>
                </Link>
            </div>
            <div>
                <Link to={'/login'} style={{textDecoration: 'none', color:"black" }} >
                <div style={{display:"flex", marginTop:"15%"}}>
    
                {/* <FontAwesomeIcon icon={faPhone} size='xl' /> */}
                <Button  style={{ backgroundColor: "blue"  }}>Log In</Button>
                </div>
                </Link>
            </div>
            <div>
                <Link to={'/signup'} style={{textDecoration: 'none', color:"black" }} >
                <div style={{display:"flex", marginTop:"15%"}}>
    
                {/* <FontAwesomeIcon icon={faPhone} size='xl' /> */}
                <Button style={{ backgroundColor: "blue"  }}> Sign Up</Button>
                </div>
                </Link>
            </div>
    
          </Col>
         
         
    
        </Row>
        <Row style={{height: "30%", background: "gray"}}>
        {/* <Image src="https://avatars.githubusercontent.com/u/94521881?v=4" style={{height:"150", width:"150", marginTop:"15px"}} roundedCircle /> */}
    
        </Row>
          </div>
    )
}

export default Header