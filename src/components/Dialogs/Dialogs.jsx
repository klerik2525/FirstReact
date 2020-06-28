import React from 'react';
import classes from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';






const Dialogs = (props) => {


let DialogsElements = props.state.dialogs.map((dialog) => <DialogItem name={dialog.name} id={dialog.id} />)
let MessagesElements = props.state.messages.map((message) => <Message message={message.message} id={message.id} />)

let newMessageElement = React.createRef();
let addMessage = () => {
  let text = newMessageElement.current.value;
  alert(text);
    }

    return (
        <div>

            <div className={classes.dialogs}>
                <div class={classes.dialogsItem}>

                    {DialogsElements}

                </div>

                <div className={classes.messages}>

                    {MessagesElements}

                </div>

            </div>

            <div>
                <textarea ref={newMessageElement}> </textarea>
            </div>

            <div>

                <button onClick={addMessage}>ADD Message</button>
            </div>

   </div>

 )
}


export default Dialogs;