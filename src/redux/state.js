const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_Message_Body = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, post: 'Hi, my name is Johan', likesCount: '0', dislikesCount: '17' },
                { id: 2, post: 'Nice to meet you too', likesCount: '20', dislikesCount: '117' },
                { id: 3, post: 'Privet', likesCount: '200', dislikesCount: '4' },
                { id: 4, post: 'I am glad to see you', likesCount: '100', dislikesCount: '1' },
                { id: 5, post: 'Ola-la', likesCount: '15', dislikesCount: '18' },
                { id: 6, post: 'Valera is the best!', likesCount: '11', dislikesCount: '9' }
            ],
            newPostText: 'Add something'
        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Zhenya' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Vasia' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Vitold' },
                { id: 6, name: 'Valera' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How are you' },
                { id: 3, message: 'Fine' },
                { id: 4, message: 'Thanks' },
                { id: 5, message: 'I am happy' },
                { id: 6, message: 'And I am gruud!' }
            ],
            newMessageBody: ''
        },

        sidebar: {
            namesF: [
                { id: 1, friendName: 'Sasha' },
                { id: 2, friendName: 'Pasha' },
                { id: 3, friendName: 'Marina' },
            ],
        }
    },

    _callSubscriber() {
        console.log('STATE Was CHANGED');
    },


    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;

    },


    addPost() {
        let newPost = {
            id: 7,
            post: this._state.profilePage.newPostText,
            likesCount: 0,
            dislikesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {

        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 7,
                post: this._state.profilePage.newPostText,
                likesCount: 0,
                dislikesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }

        else if (action.type === UPDATE_NEW_Message_Body) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }

        else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({ id: 7, message: body });
            this._callSubscriber(this._state);
        }

    },


}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const updateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => 
       ({ type: UPDATE_NEW_Message_Body, body: body })


export default store;