import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  const storeData = props.store.getState();

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <Routes>
          <Route
            path="*"
            element={
              <Profile
                store={props.store}
              />
            }
          />
          <Route path="/dialogs/*" element={<DialogsContainer store={props.store} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
