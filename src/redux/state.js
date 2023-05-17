import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 1 },
        { id: 2, message: "It's my first post", likesCount: 15 },
      ],
      newPostText: "react-aigul"
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Aigul" },
        { id: 2, name: "Raush" },
        { id: 3, name: "Sara" },
        { id: 4, name: "Kate" },
        { id: 5, name: "Tom" },
      ],
      messages: [
        { id: 1, text: "Hi!" },
        { id: 2, text: "How are you?" },
        { id: 3, text: "Ok!" },
        { id: 4, text: "Ok!" },
        { id: 5, text: "Ok!" },
      ],
      newMessageBody: ""
    },
    sidebar: {}
  },
  _callSubsciber () {
    console.log("State is changed")
  },

  getState () {
    return this._state;
  },
  subscribe (observer) {
    this._callSubsciber = observer;
  },
  

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    
    this._callSubsciber(this._state);
  }
} 





window.store = store;
export default store;