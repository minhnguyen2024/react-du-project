import Layout from './components/layout/Layout'
import AllCoursesPage from './pages/AllCoursesPage';
import CreateNewCourse from './pages/CreateNewCourse';
import MyCourses from './pages/MyCourses';
import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  // const [userId, setUserId] = useState(null)
  // const [isAuth, setIsAuth] = useState(false)
  // const [token, setToken] = useState(null)

  // useEffect(()=>{
  //   const token = localStorage.getItem('token')
  //   const expiryDate = localStorage.getItem('expiryDate')
  //   if(!token || !expiryDate){
  //     return
  //   }
  // },[])

  // const loginHandler = (event, authData) =>{
  //   event.preventDefault()
  //   const graphqlQuery = {
  //     query: `
  //       query userLogin($email: String!, $password: String!){
  //         login(email: $email, password: $password){
  //           token
  //           userId
  //         }
  //       }
  //     `,
  //     variables:{
  //       email: authData.email,
  //       password: authData.password
  //     }
  //   }

  //   fetch('http://localhost:8000/graphql',{
  //     method: "POST",
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(graphqlQuery)
  //   })
  //   .then(res =>{
  //     return res.json()
  //   })
  //   .then(resData =>{
  //     if (resData.errors && resData.errors[0].status === 422){
  //       throw new Error('Validation failed')
  //     }
  //     setIsAuth(true)
  //     setToken(resData.data.login.token)
  //     localStorage.setItem('token', resData.data.login.token)
  //     localStorage.setItem('userId', resData.data.login.userId)
  //   })
  // }

  // const signupHandler = (event, authData) =>{
  //   event.preventDefault()
  //   const graphqlQuery = {
  //     query: `
  //       mutation createNewUser($email: String!, $name: String!, $password: String!) {
  //         createUser(userInput: {email: $email, name: $name, password: $password}) {
  //           _id
  //           email
  //         }
  //       }
  //     `,
  //     variables:{
  //       email: authData.signupForm.email.value,
  //       name: authData.signupForm.name.value,
  //       password: authData.signupForm.password.value
  //     }
  //   };
  //   fetch('http://localhost:8080/graphql', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(graphqlQuery)
  //   })
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then(resData => {
  //     if (resData.errors && resData.errors[0].status === 422) {
  //       throw new Error(
  //         "Validation failed. Make sure the email address isn't used yet!"
  //       );
  //     }
  //     if (resData.errors) {
  //       throw new Error('User creation failed!');
  //     }
  //     console.log(resData);
  //     setIsAuth(false)
  //     props.history.replace('/');
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }

  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllCoursesPage/>}></Route>
          <Route path="/new-course" element={<CreateNewCourse/>}></Route>
          <Route path="/my-courses" element={<MyCourses/>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;


