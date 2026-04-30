import React, { useEffect, useState } from 'react'
import Header from '../Header'
import './login.css'

const Login = () => {
  const [username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(password);
  }
  // document.documentElement.classList
  return(
    <>
      <Header />
      <h1 style={{ color: "red", textAlign: "center" }}>Welcome to Login page</h1>
        <hr />
        <section className='container'>
          <form className='form-group' action={"http://localhost:5173/dashboard"} method='POST'>
            <h1 style={h1}>Login Form</h1>
            <label htmlFor="username">Username</label>
            <input style={input} type="text" className="input" placeholder='Enter Username' onChange={e => setUsername(e.target.value)} value={username} />
            <label htmlFor="email">Email</label>
            <input style={input} type ="email" placeholder='Enter Email' onChange={e => setEmail(e.target.value)} value={email}/>
            <label htmlFor="password">Password</label>
            <input style={input} type="password" placeholder='Enter Password' onChange={e => setPassword (e.target.value)} value={password}/> 
            <button type='submit' style={btn} onClick={handleSubmit()}>Submit</button>
          </form>
        </section>
    </>
  )
}

// CSS Styles
const h1 = {
  textAlign: "center",
  color: "blue"
}

const btn = {
  width: "100%",
  padding: "7px",
  fontSize: "20px",
  backgroundColor: "blue",
  color: "white",
  borderRadius: "4px",
  border: "0",
  outline: "none",
  marginTop: "10px"
}

const input = {
  width: "100%",
  height: "30px",
  lineHeight: "25px",
  fontSize: "18px",
  padding: "5px",
  backgroundColor: "transparent",
  borderRadius: "4px"
}

export default Login
