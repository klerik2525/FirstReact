const UPDATE_NEW_Message_Body = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState ={
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
};



 const dialogsReducer = (state = initialState, action) => {

     switch (action.type) {
         case UPDATE_NEW_Message_Body:
             state.newMessageBody = action.body;
             return state;

         case SEND_MESSAGE:
             let body = state.newMessageBody;
             state.newMessageBody = '';
             state.messages.push({ id: 7, message: body });
             return state;

         default:
             return state;

     }

   
} 


export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => 
       ({ type: UPDATE_NEW_Message_Body, body: body })


export default dialogsReducer;