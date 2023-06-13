import { useState } from "react";


const ChatInput = () => {
    const [message,setMessage] = useState('');


    const sendMessage = (e) => {
        e.preventDefault();
        console.log(message);
        setMessage('');
    }
    return (
        <div className="chat-footer">
            <form onSubmit={sendMessage}>
                <input type="text" className="form-chat" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Type Here..." />
                <button className="btn-icon"><i className="fa-regular fa-paper-plane"></i></button>
            </form>
        </div>
    )
}


export default ChatInput;