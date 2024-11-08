import React, { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
function Login() {
  const [user, setUser] = useState({
    first_name:'',
    last_name:'',
    age:0,
    email:'',
    password:''

  })


  function getUserData(e){
    let myUser= {...user};
    myUser[e.target.name]=e.target.value;
    setUser(myUser)
    console.log(myUser);
  }
  async function handleSubmit(e){
    e.preventDefault();
   let res=await axios.post(`https://route-egypt-api.herokuapp.com/signup`,user)
   console.log(res);
    
  }
  return (
    <>
      <div className="container w-75">
          <h1>Login Now</h1>
          <form onSubmit={handleSubmit} >
           
            <label htmlFor="email">Email:</label>
            <input  onChange={getUserData} type="email" id='email' name='email' className='form-control mb-2 bg-transparent text-light' />
          
            <label htmlFor="password">Password:</label>
            <input  onChange={getUserData}  id='password' name='password'  className='form-control mb-2 bg-transparent text-light' />
          
     <Link to={'../home'} className='btn btn-outline-info' >Login</Link>
          </form>
      </div>
    </>
  )
}

export default Login
