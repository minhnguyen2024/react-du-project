import { useEffect, useState } from 'react'
import CourseList from '../components/courses/CourseList'

function AllCoursesPage(props){
    const [loadedCourses, setLoadedCourses] = useState([])

    useEffect(() =>{
        const graphqlQuery = {
            query:`
                query fetchCourses{
                    courses{
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

        fetch('http://localhost:8000/graphql', {
        method: 'POST',
        headers: {
            // Authorization: 'Bearer ' + this.props.token,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(graphqlQuery)
        })
        .then(res => {
            return res.json();
        })
        .then(resData =>{
            console.log(resData)
            const courses = resData.data.courses.courses
            setLoadedCourses(courses)
        })
    }, [])

    return (
        <div>
            <h1>All Courses Page</h1>
            <CourseList courses={loadedCourses}/>
        </div>
    )

}

export default AllCoursesPage