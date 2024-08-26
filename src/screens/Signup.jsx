// import React,{useState} from 'react'
// import {Link} from 'react-router-dom'
// function Signup() {
// const [state,setstate]=useState({
//   name:'',
//   firstname:'',
//   lastname:'',
//   email:'',
//   password:''
// })

// const onChange=async(e)=>{
  
//   setstate({...state,[e.target.name]:e.target.value})
//   console.log('assignment completed')

// }

// const handlesubmit=async(e)=>{
//   e.preventDefault();
//   const response=await fetch("http://localhost:5000/api/mongodb",
//     {
//       method: "POST",
//       headers: {'Content-Type':'application/json'
//     },
//     body:JSON.stringify({name:state.name,firstname:state.firstname,lastname:state.lastname,email:state.email,password:state.password})
//   }
//   );
//   const json=await response.json();
//   console.log(json);
//   if(!json.success){
//     alert("try another time buddy");
//   }
//   else{
//     alert("you nailed it")
//   }
// }

//   return (
//     <div>
//       <form onSubmit={handlesubmit}>
//       <div className="form-group">
//     <label htmlFor="exampleInputusername">Username</label>
//     <input type="text" className="form-control" id="exampleInputusername" placeholder="Enter username" name='name' value={state.name} onChange={onChange}/>
    
//   </div>
//   <div className="form-group">
//     <label htmlFor="exampleInputfirstname">First Name</label>
//     <input type="text" className="form-control" id="exampleInputfirstname" placeholder="Enter First Name" name='firstname' value={state.firstname} onChange={onChange}/>
    
//   </div>
//   <div className="form-group">
//     <label htmlFor="exampleInputlastname">Last Name</label>
//     <input type="text" className="form-control" id="exampleInputlastname" placeholder="Enter Last Name" name='lastname' value={state.lastname} onChange={onChange}/>
    
//   </div>
//   <div className="form-group">
//     <label htmlFor="exampleInputEmail1">Email address</label>
//     <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={state.email} onChange={onChange}/>
//     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
//   </div>
//   <div className="form-group">
//     <label htmlFor="exampleInputPassword1">Password</label>
//     <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={state.password} onChange={onChange}/>
//   </div>
//   <div className="form-group form-check">
//     <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
//     <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" className="m3 btn btn-success">Submit</button>
//   <Link to='/login' className="m3 btn btn-danger">Already a user</Link>
// </form>
//     </div>
//   )
// }

// export default Signup

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [state, setState] = useState({
    name: '',
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const onChange = async (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log('assignment completed');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/mongodb", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: state.name,
        firstname: state.firstname,
        lastname: state.lastname,
        email: state.email,
        password: state.password
      })
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Try another time buddy");
    } else {
      alert("You nailed it");
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Sign Up</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputusername" className="form-label">Username</label>
                  <input type="text" className="form-control" id="exampleInputusername" placeholder="Enter username" name='name' value={state.name} onChange={onChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputfirstname" className="form-label">First Name</label>
                  <input type="text" className="form-control" id="exampleInputfirstname" placeholder="Enter First Name" name='firstname' value={state.firstname} onChange={onChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputlastname" className="form-label">Last Name</label>
                  <input type="text" className="form-control" id="exampleInputlastname" placeholder="Enter Last Name" name='lastname' value={state.lastname} onChange={onChange} required />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' value={state.email} onChange={onChange} required />
                  <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                  <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name='password' value={state.password} onChange={onChange} required />
                </div>
                <div className="mb-3 form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary w-100 mb-2">Submit</button>
                <Link to='/' className="btn btn-secondary w-100">Already a user? Login</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
