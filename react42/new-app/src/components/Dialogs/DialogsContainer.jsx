import { sendMessageCreator, updateNewMessageBodyCreator } from "../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsReducer;

  let onMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
    
  }

  let onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
    
  }

  return (
    <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onMessageClick} dialogsPage={state}/>
  );
};

export default DialogsContainer;
