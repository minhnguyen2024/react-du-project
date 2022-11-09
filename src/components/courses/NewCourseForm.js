import { useRef } from 'react'

import Card from "../ui/Card"
import classes from './NewMeetupForm.module.css'
function NewMeetupForm(props){
    const courseIDInputRef = useRef()
    const courseTitleInputRef = useRef()
    const courseIntructorInputRef = useRef()
    const courseContentInputRef = useRef()


    function submitHandler(event){
        event.preventDefault()
        const courseID = courseIDInputRef.current.value
        const courseTitle = courseTitleInputRef.current.value
        const courseIntructor = courseContentInputRef.current.value
        const courseContent = courseContentInputRef.current.value

        const courseData = {
            courseID: courseID,
            courseTitle: courseTitle,
            courseIntructor: courseIntructor,
            courseContent: courseContent,
            createdBy: "Dummy User"
        }
        props.onCreateNewCourse(courseData)
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='courseID'>Course ID</label>
                <input type="text" required id="courseID" ref={courseIDInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='courseID'>Course Title</label>
                <input type="text" required id="courseTitle" ref={courseTitleInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='courseIntructor'>Course ID</label>
                <input type="text" required id="courseIntructor" ref={courseIntructorInputRef}/>
            </div>
            <div className={classes.control}>
                <label htmlFor='courseContent'>Meetup Description</label>
                <textarea required rows='5' id="courseContent" ref={courseContentInputRef}/>
            </div>
            <div className={classes.actions}>
                <button>Add Meetup</button>
            </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm