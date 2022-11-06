import { Link } from 'react-router-dom'
import classes from './MainNavigation.module.css'

function MainNavigation(){
    return (
        <header className={classes.header}>
        <div className={classes.logo}>DU Project</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Courses</Link>
                    </li>
                    <li>
                        <Link to="/new-course">Creat New Course</Link>
                    </li>
                    <li>
                        <Link to="/my-courses">My Courses</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation