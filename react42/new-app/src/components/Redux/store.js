import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi! How are you?", likesCount: "likes: 12" },
        { id: 2, message: "It is my first post!", likesCount: "likes: 15" },
      ],
      newPostText: "",
    },

    dialogsPage: {
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
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    

    this._callSubscriber(this._state); 
  }
};

export default store;
window.store = store;
