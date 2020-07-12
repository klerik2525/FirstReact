import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from '../ProfileInfo.jsx/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostscontainer';



const Profile = () => {
     return (
        <div className={classes.Profile} >
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}



export default Profile;