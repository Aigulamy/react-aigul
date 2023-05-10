let rerenderEntireTree = () => {
  console.log("State is changed")
}
let state = {
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
window.state = state;
export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = " ";
  rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText=newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
}
export default state