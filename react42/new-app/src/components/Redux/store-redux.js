import {combineReducers, legacy_createStore as createStore} from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";

let reduce = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
})


let store = createStore(reduce);

export default store;