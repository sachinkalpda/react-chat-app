import Chat from "./Chat";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";


const ChatSection = () => {
    return (
        <div className="chat-right">
            {/* chat header */}
            <ChatHeader />

            {/* chat section */}
            <Chat />

            {/* chat input section */}
            <ChatInput />


        </div>
    )
}


export default ChatSection;