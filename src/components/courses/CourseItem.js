import classes from './CourseItem.module.css'
import Card from '../ui/Card'


function CourseItem(props){
    return (
        <ul>
            <li className={classes.item}>
                <Card>
                    <div className={classes.content}>
                        <h3>{props.courseID}: {props.courseTitle}</h3>
                        <h4>Instructor: {props.courseInstructor}</h4>
                        <p>description: {props.courseContent}</p>
                    </div>
                </Card>
            </li>
        </ul>
        
    ) 
}

export default CourseItem