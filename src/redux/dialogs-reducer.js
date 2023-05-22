const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body; 
            return state;
        case  SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: 6, text: body} );
            return state 
            default:
                return state;
    }
        
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;