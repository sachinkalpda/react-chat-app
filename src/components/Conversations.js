import User from "./User";


const Conversation = () => {
    return (
        <div className="chat-left">
            <div className="chat-left-header">
                <div className="chat-left-header-title">
                    <h2>Chats</h2>
                    <button className="btn-icon"><i className="fa-regular fa-square-plus"></i></button>
                </div>
                <form>
                    <input type="text" className="form-custom" placeholder="Search..." />
                    <button className="btn-icon"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
            <div className="user-list">
               <User  />
            </div>
        </div>
    )
}


export default Conversation;