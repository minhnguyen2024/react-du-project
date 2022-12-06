import MainNavigation from "./MainNavigation";
import classes from './Layout.module.css'

// const logoutHandler = () => {
//     console.log("Logging out")
//     localStorage.removeItem('token');
//     localStorage.removeItem('userId');
//   };


function Layout(props){
    return(
        <div>
            <MainNavigation
            onLogout={props.onLogout}/>
            <main className={classes.main}>{props.children}</main>
        </div>
    )
}

export default Layout