import "./index.css";
import store from "./components/Redux/store-redux";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));


let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
        store={store}/>
    </React.StrictMode>
  );
};
rerenderEntireTree(store.getState());

// store.subscribe(rerenderEntireTree);

store.subscribe(() =>{
  let state = store.getState();
  rerenderEntireTree(state);

})