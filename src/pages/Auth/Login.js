import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import classes from '../Page.module.css'

async function loginUser(loginData){
    
    console.log(loginData.email)
    console.log(loginData.password)
    const graphqlQuery = {
        query: `
          query userLogin($email: String!, $password: String!){
            login(email: $email, password: $password) {
                token
                userId
            }
          }
        `,
        variables:{
          email: loginData.email,
          password: loginData.password
        }
      };

    return fetch('http://localhost:8000/graphql', {
        method: 'POST',
        headers: {
            // Authorization: 'Bearer ', // need to add token
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(graphqlQuery)
    })
    .then(res =>{
        return res.json()
    })
    .then(resData =>{
        console.log("resData Login.js",resData)
        if (resData.errors) {
            throw new Error('User login failed!');
        }
        console.log("Login Success")
        console.log("Setting localStorage")
        localStorage.setItem('token', resData.data.login.token);
        console.log(resData.data.login.token)
        localStorage.setItem('userId', resData.data.login.userId);
        return resData.data.login.token
    })
    .catch(err =>{
        console.log(err)
    })
}

export default function Login({setToken}, props){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const nav = useNavigate()
    
    const handleSubmit = async event =>{
        event.preventDefault()
        console.log(email)
        console.log(password)
        const token = await loginUser({email, password})
        console.log("setToken", token)
        setToken(token)
        nav('/my-courses')

    }

    return(
        <div className="login-wrapper">
            <h1>Login</h1>
            <div className={classes.control}>

            </div>
            <form onSubmit={handleSubmit}>
                <div className={classes.control}>
                    <label>
                        <p>Email</p>
                        <input type="text" onChange={e => setEmail(e.target.value)}/>
                    </label>
                </div>
                <div className={classes.control}>
                    <label>
                        <p>Password</p>
                        <input type="text" onChange={e => setPassword(e.target.value)}/>
                    </label>
                </div>
                <div className={classes.actions}>
                    <button type="submit">Log In</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes ={
    setToken: PropTypes.func.isRequired
}