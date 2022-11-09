import classes from './CourseItem.module.css'
import Card from '../ui/Card'


function CourseItem(props){
    // const favoriteContext = useContext(FavoritesContext)
    // const itemIsFavorite = favoriteContext.itemIsFavorite(props.id)

    // function toggleFavoriteStatusHandler(){
    //     if(itemIsFavorite){
    //         favoriteContext.removeFavorite(props.id)
    //     } else{
    //         favoriteContext.addFavorite({
    //             id: props.id,
    //             title: props.title,
    //             description: props.description,
    //             image: props.image,
    //             address: props.address
    //         })
    //     }
    // }

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