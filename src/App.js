import Layout from './components/layout/Layout'
import AllCoursesPage from './pages/AllCoursesPage';
import CreateNewCourse from './pages/CreateNewCourse';
import MyCourses from './pages/MyCourses';
import LoginPage from './pages/Auth/Login'
import SignUpPage from './pages/Auth/Signup';
import { Routes, Route } from 'react-router-dom'
import useToken from './useToken'


function App() {
  const { token, setToken } = useToken()
  
  // console.log("App token", token)
  // if(!token){
  //   console.log("no token found")
  //   return <LoginPage setToken={setToken}/>
  // }
 
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllCoursesPage/>}></Route>
          <Route path="/new-course" element={<CreateNewCourse/>}></Route>
          <Route path="/my-courses" element={<MyCourses/>}></Route>
          <Route path="/login" element={<LoginPage setToken={setToken}/>}></Route>
          <Route path="/sign-up" element={<SignUpPage/>}></Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;


