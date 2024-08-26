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

import React from 'react'

function Login() {
  return (
    <div className='container mt-5'>
       <div className='row justify-content-center'>
        <div className='col-md-6'>
        <div className='card shadow'>
    <div className='card-body'> 
    <h3 className="card-title text-center mb-4">Login Buddy</h3>
      <form>
  <div class="form-group">
    <label htmlFor="exampleInputusername">Username</label>
    <input type="text" class="form-control" id="exampleInputusername"  placeholder="Enter email"/>
  </div>
  <div class="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
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
