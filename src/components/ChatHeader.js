
import { useSelector } from "react-redux";

const ChatHeader = () => {
    // get current reciever information from state
    const reciever = useSelector((state) => state.chats.reciever);
    return (
        <div className="chat-header">
            <div className="chat-user-detail">
                {Object.keys(reciever).length !== 0 ?
                    <>
                        <div className="title">{reciever.name}</div>
                        <span>online</span>
                    </>

                    :
                    <>
                        <div className="title">Select a Conversation</div>
                        <span> </span>
                    </>
                }

            </div>
            <div className="chat-user-options">

            </div>
        </div>
    )
}


export default ChatHeader;