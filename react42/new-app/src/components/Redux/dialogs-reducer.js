const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MEESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Alexandr" },
    { id: 2, name: "Alexey" },
    { id: 3, name: "Oleg" },
    { id: 4, name: "Nikita" },
    { id: 5, name: "Anastasia" },
  ],

  messages: [
    { id: 1, message: "Hi!" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "It is my new account." },
    { id: 4, message: "Who are you?" },
    { id: 5, message: "Hello!" },
  ],

  newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.messages.push({
        id: 6,
        message: body,
      });
      state.newMessageBody = "";
      return state;
    default:
      return state;
  }
};

export let sendMessageCreator = () => ({ type: SEND_MESSAGE });

export let updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
