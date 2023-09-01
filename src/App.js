import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Music from "./Components/Music/Music";
import Navbar from "./Components/Navbar/Navbar";
import News from "./Components/News/News";
import Settings from "./Components/Settings/Settings";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";

const App = (props) => {
  return (
    <div>
      <BrowserRouter>
        <div className="app-wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>
              <Route
                path="/dialogs"
                element={<DialogsContainer />}
              />
              <Route
                path="/profile/:userId?"
                element={
                  <ProfileContainer />
                }
              />
               <Route
                path="/users"
                element={
                  <UsersContainer />
                }
              />
              <Route
                path="/login"
                element={
                  <LoginPage />
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
