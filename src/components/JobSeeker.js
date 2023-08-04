import Header from "./Header";
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import {Button} from "react-bootstrap";
<Header/>



export default function JobSeeker() {
  return (
    <> 
    <Container>

      {/* Header */}
      <Row style={{background: "lightgray" }}>
      <Col sm={4} >
        
      </Col>  
      <Col sm={5}>
        
      
      </Col>
      <Col sm={1} style={{display: 'flex'}}>
     
        
        </Col>
      </Row>

      {/* Chats and Chat Numbers */}
      <Row style={{ marginTop:"50px",}}>
        <Col sm={7}>

            <Row style={{ marginTop:"50px", }}>
          {/* <Image src=" https://webdakaar.com/img/design-&-development.png"  /> */}
          <Image src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128701db7e63c6_Frame%2520283-min-p-800.png"  />
          
          </Row>        
          
        </Col>
        <Col sm={5}>
        <div style={{ marginTop: "150px"}}>
                <h5>
                    <span style={{ color: "#0075f6", fontWeight:"700" }}>  GOT TALENT? </span>
                </h5>
                <h1>
                    <span style={{color:"#0075f6"}}>
                        {/* <span style={{ color:"black" }} > I'm </span> */}
                        <span style={{ color:"#0075f6" }} > Why job seekers love us </span>
                    </span>
                </h1>
                <div style={{display: "flex", width:"50%", height:"50%"}} >

                <Image src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287fab77e63b3_Star.svg" />
                <h6>
                  Unique jobs at startups and tech companies you can't find anywhere else
                </h6>
                </div>
                <div style={{display: "flex", width:"50%", height:"50%"}} > 
                <Image src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128775587e63ec_Click.svg"/>
                <h6>
                Say goodbye to cover letters - your profile is all you need. One click to apply and you're done.
                </h6>
                </div>
                <div style={{display: "flex", width:"50%", height:"50%"}} > 
                <Image src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287515d7e63b2_List.svg" /> 
                <h6>
                Everything you need to know to job search - including seeing salary and stock options upfront when looking
                </h6>
                </div>
                <div style={{display: "flex", width:"50%", height:"50%"}} > 
                <Image src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287b6b07e63ed_Connect.svg"/>
                <h6>
                Connect directly with founders at top startups - no third party recruiters allowed
                </h6>
                </div>
            </div>

            <div style={{ display: "flex" , gap:"5px"}}> 

            <Link to={'/'} style={{textDecoration: 'none', color:"black" }} >
                <div style={{display:"flex", marginTop:"15%"}}>
    
                {/* <FontAwesomeIcon icon={faPhone} size='xl' /> */}
                <Button  style={{ backgroundColor: "grey"  }}>Learn more</Button>
                </div>
                </Link>

                <Link to={'/signup'} style={{textDecoration: 'none', color:"black" }} >
                <div style={{display:"flex", marginTop:"15%"}}>
    
                {/* <FontAwesomeIcon icon={faPhone} size='xl' /> */}
                <Button  style={{ backgroundColor: "blue"  }}>Sign Up Now</Button>
                </div>
                </Link>
            </div>
          
        </Col>
      </Row>

    </Container>
  </>
  )
}
























