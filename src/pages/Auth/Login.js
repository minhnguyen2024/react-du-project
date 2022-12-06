import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

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
        localStorage.setItem('userId', resData.data.login.userId);
        
        return resData.data.login.token
    })
    // .then(()=>{
    //     const nav = useNavigate()
    //     nav('/')
    // })
    .catch(err =>{
        console.log(err)
        // setIsAuth(false)
    })
}

export default function Login({setToken}, props){
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    // const [isAuth, setIsAuth] = useState(false)
    // const [token, setToken] = useState(null)
    
    const handleSubmit = async event =>{
        event.preventDefault()
        console.log(email)
        console.log(password)
        const token = await loginUser({email, password})
        console.log("setToken", token)
        setToken(token)
    }

    return(
        <div className="login-wrapper">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <p>Password</p>
                    <input type="text" onChange={e => setPassword(e.target.value)}/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

Login.propTypes ={
    setToken: PropTypes.func.isRequired
}