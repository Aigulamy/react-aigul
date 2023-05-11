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
    },
  };
  getState () {
    return this._state;
  },
  _callSubsciber () {
    console.log("State is changed")
  },
  addPost () {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    }
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = " ";
    this._callSubsciber(this._state);
  },
  updateNewPostText (newText) {
    this._state.profilePage.newPostText=newText;
    this._callSubsciber(this._state);
  },
  subscribe (observer) {
    this._callSubsciber = observer;
  }
}




window.store = store;
export default store;