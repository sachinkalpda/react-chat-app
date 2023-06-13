import ChatSection from "./ChatSection";
import Conversation from "./Conversations";

function App() {
  return (
    <div className="container">
      <div className="chat-container">
        {/* left section */}
         <Conversation />

         {/* right section */}
         <ChatSection />

      </div>
    </div>
  );
}

export default App;
