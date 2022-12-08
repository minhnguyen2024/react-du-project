import NewCourseForm from "../components/courses/NewCourseForm"


function CreateNewCourse(){
    function createNewCourseHandler(courseData){
        console.log(courseData)
        const token = localStorage.getItem('token')
    
        let graphqlQuery = {
            query: `
            mutation CreateNewCourse($courseID: String!, $courseTitle: String!, $courseInstructor: String!, $courseContent: String!){
                createCourse(courseInput: { courseID: $courseID, courseTitle: $courseTitle, courseInstructor: $courseInstructor, courseContent: $courseContent }){
                    _id
                    courseID
                    courseTitle
                    courseInstructor
                    courseContent
                }
            }
            `,
            variables:{
                courseID: courseData.courseID,
                courseTitle: courseData.courseTitle,
                courseInstructor: courseData.courseInstructor,
                courseContent: courseData.courseContent
            }
        }
        return fetch('http://localhost:8000/graphql', {
            method: 'POST',
            body: JSON.stringify(graphqlQuery),
            headers: {
                Authorization: 'Bearer ' + token,
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        })
        .then(resData =>{
            console.log(resData)
        })
        
    }

    return (
        <section>
            <h1>Add a Course Page</h1>
            <NewCourseForm onCreateNewCourse={createNewCourseHandler}/>
        </section>
    )
}

export default CreateNewCourse