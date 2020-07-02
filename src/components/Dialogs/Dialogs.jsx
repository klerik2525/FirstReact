import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {updateNewMessageBodyCreator, sendMessageCreator} from './../../redux/state';


const Dialogs = (props) => {


    let state = props.store.getState().dialogsPage


    let DialogsElements = state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />)
    let MessagesElements = state.messages.map((message) => <Message message={message.message} id={message.id} />)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());

    }

    let onNewMessageChange = (event) => {
      let body =  event.target.value;
      props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div>

            <div className={classes.dialogs}>
                <div className={classes.dialogsItem} >

                    {DialogsElements}

                </div>

                <div className={classes.messages}>

                    <div> {MessagesElements} </div>
                    <div>

                        <div><textarea value = {newMessageBody} 
                                       onChange = {onNewMessageChange}
                                       placeholder = 'Enter your text' > </textarea></div>
                        <div><button onClick= { onSendMessageClick } >ADD Message</button></div>

                   </div>

                </div>

            </div>
        </div>

    )
}


export default Dialogs;