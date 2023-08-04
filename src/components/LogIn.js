import { Container, FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import OTPVerify from './OTPVerify'
// export default class Content extends Component {
//   constructor(props) {  
//     super(props);        
//     this.state = { 
//         input: ""
//     };
//   }
//   handleChange = (e) => {
//     this.setState({ input: e.target.value });
//     console.log("Handle Change",e.target.value)
//   }

//   handleClick = (e) => {
//     e.preventDefault();
//     console.log(this.state)
//     console.log(e.target)
//     // axios.get(`http://localhost:4000/login?mail=${this.state.input}`)
//     .then((result)=>{
//       if(result){
//         console.log(result)
        
//         console.log("Mail added to LocalStorage")   
//       }
      
//     })
//     .catch((err)=>{
//       console.log(err)
//     })
//   } 

//   render() {
//     return (
//     <>  
//       <Container className='mt-5' style={{width: "50%"}}>
          
//       <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label  >Email ID</Form.Label>
//           <Form.Control type="email"
//                         placeholder="Enter your Email ID" 
//                         value={this.state.input}
//                         onChange={(e)=> { console.log('Changed'); this.handleChange(e)} }
//           />
//         </Form.Group>
 
//         <Button variant="primary" type="submit" onClick={ (e)=>this.handleClick(e) }>
        
//           Log In 
          
//         </Button> 
//       </Form>
//       <div style={{  marginTop: "5px", textAlign:"center" }}>
//       <Link to = {'/signup'}> 
//       Sign up for new account
//           </Link>
          

//       </div>
//       </Container>
//     </>
//     );
//   }
// }

import { useState } from 'react';
import database from './Firebase'

function LogIn() {
	const [name, setName] = useState();
	const [age, setAge] = useState();
    const navigate = useNavigate();
	// Push Function
	const Push = () => {
		database.ref("user").set({
			name: name,
			age: age,
		}).catch(alert);
        setName(" ");
        setAge(" ")
        navigate('/')
	}

	return (
		<div className="App" style={{ marginTop: 250 }}>
			<center>
				<input placeholder="Enter your name" value={name}
					onChange={(e) => setName(e.target.value)} />
				<br /><br />
				<input placeholder="Enter your password" value={age}
					onChange={(e) => setAge(e.target.value)} />
				<br /><br />
				<button onClick={Push}>Log In</button>
                <div style={{  marginTop: "5px", textAlign:"center" }}>
      <Link to = {'/signup'}> 
      Sign up for new account
          </Link>
      </div>
			</center>
		</div>
	);
}

export default LogIn;
