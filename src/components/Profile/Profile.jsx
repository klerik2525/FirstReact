import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts ';
import ProfileInfo from '../ProfileInfo.jsx/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostscontainer';



const Profile = (props) => {
  debugger;

    return (
        <div className={classes.Profile} >

            <ProfileInfo />

            <MyPostsContainer />


        </div>


    )



}




   



export default Profile;