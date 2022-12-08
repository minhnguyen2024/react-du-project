import { useState } from 'react'
import CourseList from '../components/courses/CourseList'
import LoginPage from '../pages/Auth/Login'
import classes from './Page.module.css'
import useToken from '../useToken'

async function MyCoursesHandler(){
    const userId = localStorage.getItem('userId')
    const token = localStorage.getItem('token')
    if (!token){
        return (
            <h1>User not Logged In. Please Log In</h1>
        )
    }
    
    const graphqlQuery = {
        query: `{
            myCourses(id: "${userId}"){
                courses{
                    _id
                    courseID
                    courseTitle
                    courseInstructor
                    courseContent
                }
            }  
        }
        `
    }
    return fetch('http://localhost:8000/graphql', {
        method: "POST",
        headers: {
            Authorization: 'Bearer ' + token.replaceAll('"',''),
            "Content-Type": "application/json"
        },
        body: JSON.stringify(graphqlQuery)
    })
    .then(res => {
        return res.json();
    })
    .then(resData => {
        return resData.data.myCourses.courses
    })
}

function MyCourses(){
    const [myCourses, setMyCourses] = useState([])
    const handleSubmit = async event =>{
        event.preventDefault()
        const myCourses = await MyCoursesHandler()
        console.log(myCourses)
        setMyCourses(myCourses)
    }

    return (
        <div>
            <h1>My Courses</h1>
            <form onSubmit={handleSubmit}>
                <div className={classes.actions}>
                    <button type="submit">See My Courses</button>
                </div>
            </form>
            <CourseList courses={myCourses}/>
        </div>
    )
}
export default MyCourses
