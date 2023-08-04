import React from "react";
import { useForm } from "react-hook-form";
import { Container, FormGroup } from 'react-bootstrap';
import {  Link } from 'react-router-dom';
// import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// const RegisterForm = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const handleRegistration = (data) => { 
//     console.log(data);
//     // axios.post(`http://localhost:4000/form`, {
//         email: data.email,
//         name: data.name, //chanage
//         password: data.password,
//       }).then((result)=>{
//         if(result){
//           console.log("send res --> ", result)
//         }
//       })
//       .catch((err)=>{
//         console.log(err)
//       })
//     }


  
//   const handleError = (errors) => {};

//   const registerOptions = {
//     name: { required: "Name is required" },
//     email: { required: "Email is required" },
//     password: {
//       required: "Password is required",
//       minLength: {
//         value: 8,
//         message: "Password must have at least 8 characters"
//       }
//     }
//   };

//   return (
//     <Container className='mt-5' style={{width: "50%"}}>  
//     <form onSubmit={handleSubmit( handleError)}> 
//                                 {/* handleRegistration */}
//       <div>
//         <label>Name</label>
//         <input name="name" type="text" {...register('name', registerOptions.name) }/>
//         <small className="text-danger">
//           {errors?.name && errors.name.message}
//         </small>
//       </div>
//       <div>
//         <label>Email</label>
//         <input
//           type="email"
//           name="email"
//           {...register('email', registerOptions.email)}
//         />
//         <small className="text-danger">
//           {errors?.email && errors.email.message}
//         </small>
//       </div>
//       <div>
//         <label>Password</label>
//         <input
//           type="password"
//           name="password"
//           {...register('password', registerOptions.password)}
//         />
//         <small className="text-danger">
//           {errors?.password && errors.password.message}
//         </small>
//       </div>
//       <div style={{display:"flex", gap:"30px"}}>
//       <Link to={'/'} style={{textDecoration: 'none', color:"black" }} >   
//       <button>Back to Home Page</button>
//       </Link>
//       <button>Submit </button>
//       </div>
//     </form>
//    </Container> 
//   );
  
// };

// export default RegisterForm;


import { useState } from 'react';
import database from './Firebase'

function RegisterForm() {
	const [name, setName] = useState();
	const [age, setAge] = useState();
    const [email, setEmail] = useState();
    const navigate = useNavigate();
	// Push Function
	const Push = () => {
		database.ref(name).set({
			name: name,
            email: email,
			age: age,
		}).catch(alert);
        setName(" ");
        setAge(" ")
        setEmail(" ")
        navigate('/login')
	}

	return (
		<div className="App" style={{ marginTop: 250 }}>
			<center>
				<input placeholder="Enter your name" value={name}
					onChange={(e) => setName(e.target.value)} />
				<br /><br />
                <input placeholder="Enter your email" value={email}
					onChange={(e) => setEmail(e.target.value)} />
				<br /><br />
				<input placeholder="Enter your password" value={age}
					onChange={(e) => setAge(e.target.value)} />
				<br /><br />
				<button onClick={Push}>Sign Up</button>
                {/* <div style={{  marginTop: "5px", textAlign:"center" }}>
      <Link to = {'/signup'}> 
      Sign up for new account
          </Link>
      </div> */}
			</center>
		</div>
	);
}

export default RegisterForm;
