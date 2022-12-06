export default function MyCoursesForm(props){
    const userId = localStorage.getItem('userId')
    console.log(userId)
    function submitHandler(event){
        event.preventDefault()
        props.onMyCoursesForm(userId)
    }
    return (
        <form onSubmit={submitHandler}>
            <button>My Courses</button>
            
        </form>
    )
}