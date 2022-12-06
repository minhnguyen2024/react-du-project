import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'


const logoutHandler = () => {
    console.log("Logging out")
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('userId');
  };


function MainNavigation(props){
    return (
        <header className={classes.header}>
        <div className={classes.logo}>DU Project</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Courses</Link>
                    </li>
                    <li>
                        <Link to="/new-course">Add a Course</Link>
                    </li>
                    <li>
                        <Link to="/my-courses">My Courses</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/sign-up">Sign Up</Link>
                    </li>
                    <li>
                        <button onClick={logoutHandler}>Logout</button>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation