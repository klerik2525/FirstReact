import React from 'react';
import classes from './ProfileInfo.module.css';



const ProfileInfo = () => {
    return (
    <div >
    
    <div className = {classes.wallpaper}>
      <img src='https://avatars.mds.yandex.net/get-pdb/216365/1c0ac969-d59b-4480-9e50-4b4f3a6ea31c/s1200?webp=false' alt = " "  />
    </div>

    <div className = {classes.descriptionBlock}>
      
      ava + description
      
    </div>

    

    </div>


    )



}

export default ProfileInfo;