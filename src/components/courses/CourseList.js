import classes from './CourseList.module.css'
import CourseItem from './CourseItem'
function CourseList(props){
    return (
        <ul className={classes.list}>
            {props.courses.map(course =>{
               return <CourseItem 
                    key={course._id} 
                    courseTitle={course.courseTitle}
                    courseID={course.courseID}
                    courseInstructor={course.courseInstructor}
                    courseContent={course.courseContent}
                />
            })}
        </ul>
    )
}
export default CourseList