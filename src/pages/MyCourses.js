import { useState, useEffect } from 'react'
import CourseList from '../components/courses/CourseList'
// import MyCoursesForm from '../components/courses/MyCoursesForm'

function MyCourses(){
    const [myCourses, setMyCourses] = useState([])
    const userId = localStorage.getItem('userId')
    const token = localStorage.getItem('token')
    // useEffect(()=>{
    //     const graphqlQuery = {
    //         query: `{
    //             myCourses(id: "${userId}"){
    //                 courses{
    //                     _id
    //                     courseID
    //                     courseTitle
    //                     courseInstructor
    //                     courseContent
    //                 }
    //             }  
    //         }
           
    //         `
    //     }
    //     console.log(JSON.stringify(graphqlQuery))
    //     fetch('http://localhost:8080/graphql', {
    //         method: "POST",
    //         headers: {
    //             Authorization: 'Bearer ' + token,
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(graphqlQuery)
    //     })
    //         .then(res => {
    //             // console.log(res.json())
    //             return res.json();
    //         })
    //         .then(resData => {
    //             console.log(resData)
    //             setMyCourses(resData.myCourses.courses)
    //         })
    //     },[])

    return (
        <div>
            <h1>My Courses</h1>
            <CourseList courses={myCourses}/>
        </div>
    )
}

export default MyCourses
