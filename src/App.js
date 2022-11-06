import Layout from './components/layout/Layout'
import AllCoursesPage from './pages/AllCoursesPage';
import CreateNewCourse from './pages/CreateNewCourse';
import MyCourses from './pages/MyCourses';
import { Routes, Route } from 'react-router-dom'

function App() {
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
