import React from 'react';
import classes from '../NavBar/NavBar.module.css';
import { NavLink } from 'react-router-dom';


const NameFriends = (props) => {
    

     
    let path = "/NameFriends/" + props.id;
    

    return (
       <div>
        
        <div className={classes.friends}>
            
            <NavLink to={path}> {props.friendName}</NavLink>

            

        </div>

        
        
</div>
 
    )

    

}




export default NameFriends;