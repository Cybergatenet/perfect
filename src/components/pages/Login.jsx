import React, { useEffect, useState } from 'react'
import Header from '../Header'
import axios from 'axios'
import './login.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsername ] = useState("");
  const [ email, setEmail ] = useState("");
  const [password, setPassword] = useState("");
  const [ isError, setIsError ] = useState(false)
  const [errorText, setErrorText] = useState("")
  
  const navigation = useNavigate()
  

  const handleSubmit = (e) => {
    // console.log(e);
    const URL = 'https://jsonplaceholder.typicode.com/users';
    // axios.post(URL, {
    //   method: 'post',
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   data: [username, email, password]
    // })

    const data = async () => {
      const d = await axios.get(URL).then(users => users)
      if(d.status == 200){
        navigation("/dashboard", {username, email})
        return d.data
      }else{
        return "Failed to fetch"
      }
    }

    console.log(data());
    
    
  }
  // document.documentElement.classList
  return(
    <>
      <Header />
      <h1 style={{ color: "red", textAlign: "center" }}>Welcome to Login page</h1>
        <hr />
        <section className='container'>
          <form className='form-group'>
            <h1 style={h1}>Login Form</h1>
            <div className=''>{errorText}</div>
            <label htmlFor="username">Username</label>
            <input style={input} type="text" className="input" placeholder='Enter Username' onChange={e => setUsername(e.target.value)} value={username} />
            <label htmlFor="email">Email</label>
            <input style={input} type ="email" placeholder='Enter Email' onChange={e => setEmail(e.target.value)} value={email}/>
            <label htmlFor="password">Password</label>
            <input style={input} type="password" placeholder='Enter Password' onChange={e => setPassword (e.target.value)} value={password}/> 
            <button type='submit' style={btn} onClick={handleSubmit}>Submit</button>
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


