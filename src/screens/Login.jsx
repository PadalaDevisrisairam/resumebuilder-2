// import React from 'react'
// import './css.css'
// export default function Login() {
//   return (
//     <div>
//       <div className='linbck'>
//         <div className='lincmp'>
//         <input type="text" id='user_name' placeholder='user_name' style={{borderRadius:'10px',display:'block',marginTop:'50px',padding:'10px'}}/>

//      <input type="password" placeholder='password' style={{borderRadius:'10px',display:'block',marginTop:'50px',padding:'10px'}}/>

//         </div>
//         <div style={{width:'50px',marginLeft:'auto',marginRight:'auto', marginTop:'20px'}}>
//         <button >Login</button>
//         </div>

//    </div>
//     </div>
//   )
// }


// import React from 'react';
// import './css.css';

// export default function Login() {
//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2 className="login-title">Welcome Back!</h2>
//         <p className="login-subtitle">Please log in to your account</p>
//         <input
//           type="text"
//           id="user_name"
//           placeholder="Username"
//           className="login-input"
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           className="login-input"
//         />
//         <button className="login-button">Login</button>
//         <p className="forgot-password">Forgot your password?</p>
//       </div>
//     </div>
//   );
// }

import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

function Login() {
  const navigator=useNavigate();

  const [state, setState] = useState({
    name: "",
    password: ""
  })

  const onChange = async (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log('assignment completed');
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginroute", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: state.name,
        password: state.password
      })
    });
    const json = await response.json();
    console.log(json);
    if (json.success === false) {
      alert("you donot have account buddy please signup first");
    }
     else {
      alert("You nailed it");
      navigator("/");
    }
  }

    return (
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <div className='col-md-6'>
            <div className='card shadow'>
              <div className='card-body'>
                <h3 className="card-title text-center mb-4">Login Buddy</h3>
                <form onSubmit={handleSubmit}>
                  <div class="form-group">
                    <label htmlFor="exampleInputusername">Username</label>
                    <input type="text" class="form-control" id="exampleInputusername" placeholder="Enter username" name="name" onChange={onChange} />
                  </div>
                  <div class="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" name='password' onChange={onChange} />
                  </div>
                  <div className='d-flex justify-content-center'>
                    <button type="submit" className="btn btn-primary mt-2">Submit</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  
}

export default Login
