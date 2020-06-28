import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {

  return (

    <div className={classes.item}>
      <img src='https://i.pinimg.com/736x/68/5d/88/685d8894bf1da5fa1312d7819403065e.jpg' alt = " " />
        {props.message}

      <div>
        <span>LIKE</span> {props.likesCount} - 
        - <span>DISLIKE</span> {props.dislikesCount}
      </div>

    </div>

  )

}

export default Post;