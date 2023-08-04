

import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Row from 'react-bootstrap/Row';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function Footer(props) {
    
    return (
    <div style={{
            textAlign: "center", 
            backgroundColor: "lightgray",
            height: "15%",
            // position: "fixed",
            left: 0,
            bottom: 0,
            width: "100%",
            scrollPaddingBottom: "2em"
        }}
        

    >
        <div class="clear"></div>

        <Row style={{height: "70%", background: "lightgray"}}>
            <span style={{textAlign:"center", display:"flex", justifyContent: "center " }}>
                <FontAwesomeIcon icon={faComments} size='2xl'/>
                <h3>Get In Touch</h3>
            </span>
            
            <Col sm = {4} ></Col>
            <Col sm = {4}> 
            
            <div style={{ display:"flex", justifyContent: " space-around", marginTop:"15px" }}> 
                <div>
                    <h3>
                        <a href=" "  style={{textDecoration: 'none', color:"black" }}>  
                            <FontAwesomeIcon icon={faLinkedinIn} /> 
                        </a>     
                    </h3>
                </div>   
                <div>
                    <h3>
                    <a href=" "  style={{textDecoration: 'none', color:"black" }}>  
                        <FontAwesomeIcon icon={faSquareGithub} />
                    </a>    
                    </h3>
                    
                </div> 
                <div>
                    <h3>
                    <a href=" "  style={{textDecoration: 'none', color:"black" }}>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>    
                    </h3>
                </div>
                <div>
                    <h3>
                    <a href=" "  style={{textDecoration: 'none', color:"black" }}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>    
                    </h3>
                    
                </div>
            </div>

            </Col>
            <Col sm = {4} ></Col>

            <h5 style={{  marginTop:"15px", marginBottom: "15px"}} >© 2023 Coursify </h5>



        </Row>
    
      </div >
    )
  
}

export default Footer
