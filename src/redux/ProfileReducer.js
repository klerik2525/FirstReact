const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, post: 'Hi, my name is Johan', likesCount: '0', dislikesCount: '17' },
        { id: 2, post: 'Nice to meet you too', likesCount: '20', dislikesCount: '117' },
        { id: 3, post: 'Privet', likesCount: '200', dislikesCount: '4' },
        { id: 4, post: 'I am glad to see you', likesCount: '100', dislikesCount: '1' },
        { id: 5, post: 'Ola-la', likesCount: '15', dislikesCount: '18' },
        { id: 6, post: 'Valera is the best!', likesCount: '11', dislikesCount: '9' }
    ],
    newPostText: 'Add something'
};



 const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 7,
                post: state.newPostText,
                likesCount: 0,
                dislikesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
        state.newPostText = action.newText;
        return state;

        default: 
        return state;
    }
   
} 


export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export default profileReducer;