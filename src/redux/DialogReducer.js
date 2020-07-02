const UPDATE_NEW_Message_Body = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

 const dialogsReducer = (state, action) => {

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