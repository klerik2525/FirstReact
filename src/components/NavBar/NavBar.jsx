import React from 'react';
import classes from './NavBar.module.css';
import {NavLink} from 'react-router-dom';
import NameFriends from '../NameFriends/NameFriends'




const NavBar = (props) => {

  
    let FriendsElements = props.state.namesF.map((f) => <NameFriends friendName={f.friendName} id = {f.id}  />)

    return ( 
    <nav className = {classes.nav}>
     
    <div className = {classes.item} >
    
      <NavLink to = '/Profile' activeClassName = {classes.activeLink}>
        <img src= 'https://c7.hotpng.com/preview/178/595/684/user-profile-computer-icons-login-user-avatars.jpg' alt = " " />Profile</NavLink>
    </div>
    <div className = {`${classes.item} ${classes.active}`}>
      <NavLink to = '/Dialogs' activeClassName = {classes.activeLink}> 
        <img src= 'https://img2.freepng.ru/20180409/saq/kisspng-email-computer-icons-message-email-5acbc7a5eb1367.1552786715233043579629.jpg' alt = " " />  Message </NavLink>
    </div>
    <div className = {classes.item}>
      <NavLink to = '/News' activeClassName = {classes.activeLink}>
      <img src= 'http://cdn.onlinewebfonts.com/svg/img_453755.png'  alt = " " /> News</NavLink>
    </div>
    <div className = {classes.item}>
      <NavLink to = '/Musik' activeClassName = {classes.activeLink}>
      <img src= 'http://cdn.onlinewebfonts.com/svg/img_413042.png' alt = " " /> Musik</NavLink>
    </div>

    <div className = {`${classes.item} ${classes.active}`}>
      <NavLink to = '/Settings' activeClassName = {classes.activeLink}>
      <img src= 'https://c7.hotpng.com/preview/308/74/446/computer-icons-setting-icon.jpg' alt = " " />  Settings</NavLink>
    </div>
    
    
   <div className = {classes.frendsBlock}>
     
    <img src=  'https://www.seekpng.com/png/full/332-3326957_png-file-trust-circle-icon.png' alt = " " />{FriendsElements}
   </div>

    

  </nav>
    
  
)

  





}

export default NavBar;