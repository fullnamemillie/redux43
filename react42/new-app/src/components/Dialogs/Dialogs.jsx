import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { sendMessageCreator, updateNewMessageBodyCreator } from "../Redux/dialogs-reducer";

const Dialogs = (props) => {
  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message id={m.id} message={m.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onMessageClick = (e) => {
    props.sendMessage();
    
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;

    props.updateNewMessageBody(body);
    
  }

  return (
    <div className={s.content}>
      <div className={s.dialogs}>
        <div className={s.dialogsItems}>{dialogsElements}</div>
        <div className={s.messages}>
          <div>{messagesElements}</div>
          <div>
            <div><textarea className={s.textarea} placeholder="Enter your message" onChange={onNewMessageChange} value={newMessageBody} /></div>
            <div><button className={s.button} onClick={ onMessageClick }>Send!</button></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
