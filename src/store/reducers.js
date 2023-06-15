import { createSlice } from "@reduxjs/toolkit";
import { loggedInUser, chats,users } from "../data";

// initial state for application
const initialState = {
    loggedInUser : loggedInUser,
    allChats : chats,
    chats : [],
    users : users.filter(u => u.id !== loggedInUser.id),
    reciever : {},
    searchResult: [],
    loading : false,
}

const chatSlice = createSlice({
    name : 'chats',
    initialState : initialState,
    reducers : {

        getHome : (state,action ) => {
            state.reciever = {};
        },

        // getting chats of selected user
        getChats : (state,action) => {
            // getting all messages
            const messages = state.allChats.filter((chat) => chat.room === action.payload.room);
            // finding reciever information
            const reciever = state.users.find((u) => u.id === parseInt(action.payload.user));

            // updating states
            state.reciever = reciever;
            state.chats = messages;
            if(state.searchResult.length !== 0)
                state.searchResult = [];
        },
        sendMessage : (state,action) => {
            // checking if conversation exist or not for a selected user
            const conversation = state.loggedInUser.conversations.filter((chat) => chat.room === action.payload.room);
            
            if(conversation.length === 0){
                // adding conversation to in logged user object
                state.loggedInUser.conversations.push({
                    id : action.payload.reciever.id,
                    name : action.payload.reciever.name,
                    room : `${action.payload.sender.id}-${action.payload.reciever.id}`
                })
            }
            // updating conversation in loggedInUser object
            conversation[0].lastMessage = action.payload.message;
            conversation[0].lastMessageTime = Date.now();
            // updating states
            state.chats.push(action.payload);
            state.allChats.push(action.payload);
        },
        createRoom : (state,action) => {
            // checking is conversation is exist or not for selected user
            const room = state.loggedInUser.conversations.filter((chat) => chat.id === action.payload.reciever.id);
            if(room.length === 0){
                // creating room for user if past conversation not found
                state.loggedInUser.conversations.push({
                    id : action.payload.reciever.id,
                    name : action.payload.reciever.name,
                    room : `${action.payload.sender}-${action.payload.reciever.id}`,
                })
                // updating state
                state.chats = [];
                return;
            }
        },
        searchConversation : (state, action) => {
            // for searching the user in current logged in user's active conversations
           const result = state.loggedInUser.conversations.filter((u) => u.name.includes(action.payload.name));
           console.log(result)
           state.searchResult = result;
        }
    }
})


// exporting actions
export const {getChats ,sendMessage,createRoom,searchConversation,getHome} = chatSlice.actions;

export default chatSlice.reducer;