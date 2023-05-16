
const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";
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
    if (action.type === "ADD_POST" ) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = " ";
        this._callSubsciber(this._state);
      } else if (action.type === "UPDATE_NEW_POST_TEXT") {
        this._state.profilePage.newPostText = action.newText;
        this._callSubsciber(this._state);
      } else if (action.type === "UPDATE_NEW_MESSAGE_BODY") {
        this._state.dialogsPage.newMessageBody = action.body;
        this._callSubsciber(this._state);
      } else if (action.type === "SEND_MESSAGE") {
        let body = this._state.dialogsPage.newMessageBody;
        this._state.dialogsPage.newMessageBody = "";
        this._state.dialogsPage.messages.push({id: 6, text: body} );
        this._callSubsciber(this._state);
    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text });

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body });

window.store = store;
export default store;