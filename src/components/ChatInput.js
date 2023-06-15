import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../store/reducers";
import { useParams } from "react-router-dom";


const ChatInput = () => {
    const [message,setMessage] = useState('');
    const user = useSelector((state) => state.chats.loggedInUser);
    const reciever = useSelector((state) => state.chats.reciever);

    // getting data from url
    const {room} = useParams();
    const dispatch = useDispatch();
    const handleInput = (e) => {
        e.preventDefault();
        // validating data
        if(message === ''){
            return;
        }

        // calling action 
        dispatch(sendMessage({
            id : Date.now(),
            message : message,
            sender : {
               id : user.id,
               name : user.name 
            },
            room,
            reciever
        }))
        setMessage('');
    }
    return (
        <div className="chat-footer">
            <form onSubmit={handleInput}>
                <input type="text" className="form-chat" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type Here..." />
                <button className="btn-icon"><i className="fa-regular fa-paper-plane"></i></button>
            </form>
        </div>
    )
}


export default ChatInput;