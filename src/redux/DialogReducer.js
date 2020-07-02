const UPDATE_NEW_Message_Body = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

 const dialogsReducer = (state, action) => {

    
    if (action.type === UPDATE_NEW_Message_Body) {
        state.newMessageBody = action.body;
        
    }

    else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.newMessageBody = '';
        state.messages.push({ id: 7, message: body });
        
    }


    return state;
} 

export default dialogsReducer;