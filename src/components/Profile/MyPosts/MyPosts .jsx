import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';




const MyPosts = (props) => {


  let PostsElements = props.posts.map((P) => <Post message={P.post} id={P.id} likesCount={P.likesCount} dislikesCount={P.dislikesCount} />)

  let newPostElement = React.createRef();
  
  let onAddPost = () => {
    props.addPost();
     
      //props.updateNewPostText(''); 
    }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPost(text);
    
    
  }

  return (
    <div className={classes.postsBlock}>

      <h3> My posts</h3>

      <div >

        <div>
          <textarea onChange = {onPostChange} ref={newPostElement} 
          value={props.newPostText} />
        </div>

        <div>

          <div>
            <button onClick={onAddPost}>ADD POST</button>
          </div>

          <div>
            <button>  REMOVE  </button>
          </div>

        </div>

      </div>
      <div className={classes.posts}>
        {PostsElements}


      </div>



    </div>




  )


}

export default MyPosts;