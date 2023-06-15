import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getChats } from "../store/reducers";

const Chat = () => {
    // getting data from states
    const loggedUser = useSelector((state) => state.chats.loggedInUser);
    const chats = useSelector((state) => state.chats.chats);

    const dispatch = useDispatch();
    const {user,room} = useParams();
    
    useEffect(() => {
        // calling actions
        dispatch(getChats({     
            room,
            user
        }))

    },[dispatch,user,room]);

    
    return (
        <div className="chat-section">
            {chats.length === 0 && <span className="nomsg">No Messages Yet.</span>}
            {chats.map((chat,index) => (
                <div className={loggedUser.id === chat.sender.id ? `msg right` : `msg left`} key={`chat-message-${index}`}>
                    <span>{chat.message}</span>
                </div>
            ))}
                      

        </div>
    )
}


export default Chat;