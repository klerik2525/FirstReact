import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/ProfileReducer';
import MyPosts from './MyPosts ';
import StoreContext from '../../../StoreContext';



const MyPostsContainer = (props) => {
  
  //let state = props.store. getState();

  
 
  return (
    <StoreContext.Consumer>
      {
      (store) => {

      let state = store. getState();
      
      let addPost = () => {
        //props.addPost();
          store.dispatch (addPostActionCreator() );
          //props.updateNewPostText(''); 
        }
    
      let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        store.dispatch (action);
        
      }
    

       return  (  
       <MyPosts
        updateNewPost={onPostChange}
        addPost={addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText} />)
    }
  }
    </StoreContext.Consumer>
 
  )
}

export default MyPostsContainer;