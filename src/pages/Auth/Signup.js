
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login(props){
    const nav = useNavigate()
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = event =>{
        event.preventDefault()
        signUpUser({email, name, password})
        nav('/login')
    }

    return(
        <div className="login-wrapper">
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Email</p>
                    <input type="text" onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <p>Name</p>
                    <input type="text" onChange={e => setName(e.target.value)}/>
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

async function signUpUser(signUpData){
  console.log(signUpData)
  const graphqlQuery = {
    query: `
      mutation createNewUser($email: String!, $name: String!, $password: String!) {
        createUser(userInput: {email: $email, name: $name, password: $password}) {
          _id
          email
          name
          password
        }
      }
    `,
    variables:{
      email: signUpData.email,
      name: signUpData.name,
      password: signUpData.password
    }
  };

    fetch('http://localhost:8000/graphql', {
        method: 'POST',
        headers: {
            // Authorization: 'Bearer ' + this.props.token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(graphqlQuery)
    })
    .then(res =>{
        return res.json()
    })
    .then(resData =>{
        if (resData.errors) {
            throw new Error('User Sign Up failed!');
        }
    })
    .catch(err =>{
        console.log(err)
    })
}
