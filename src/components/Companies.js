import Header from "./Header";
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {  Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import {Button} from "react-bootstrap";
<Header/>



export default function Companies() {
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
          <Image src=" https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d712879f567e63c5_Frame%2520284-min-p-800.png"  />
          
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

                <Image src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128716b37e63bb_Team.svg" />
                <h6>
                8 million responsive and startup-ready candidates, with all the information you need to vet them
                </h6>
                </div>
                <div style={{display: "flex", width:"50%", height:"50%"}} > 
                <Image src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d7128708fd7e63b6_Settings.svg"/>
                <h6>
                Everything you need to kickstart your recruiting - get job posts, company branding, and HR tools set up within 10 minutes, for free
                </h6>
                </div>
                <div style={{display: "flex", width:"50%", height:"50%"}} > 
                <Image src="https://assets-global.website-files.com/636dd759d71287e8ac7e6280/636dd759d71287316a7e63c1_Template.svg" /> 
                <h6>
                A free applicant tracking system, or free integration with any ATS you may already use
                </h6>
                </div>
                <div style={{display: "flex", width:"50%", height:"50%"}} > 
                <Image src=""/>
                <h6>
                Plus, we can do the vetting for you! With Curated, we review the world's top tech talent and highlight candidates directly to you 2x a week.
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
























