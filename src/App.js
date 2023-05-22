import React from "react";
import { Route, BrowserRouter, Routes, Link } from "react-router-dom";
import "./App.css";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Music from "./Components/Music/Music";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import Profile from "./Components/Profile/Profile";
import Settings from "./Components/Settings/Settings";
import store from "./redux/store";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>
              <Route
                path="/dialogs"
                element={<DialogsContainer store={props.store} />}
              />
              <Route
                path="/profile"
                element={
                  <Profile store={props.store}
                  />
                }
              />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
