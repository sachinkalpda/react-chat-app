import { useDispatch, useSelector } from "react-redux";
import User from "./User";
import {  useState } from "react";
import Modal from "./Modal";
import { searchConversation } from "../store/reducers";
import { Link } from "react-router-dom";


const Conversation = () => {
    const [search, setSearch] = useState('');
    const [contacts, setContacts] = useState(false);
    const loggedInUser = useSelector((state) => state.chats.loggedInUser);
    const searchResult = useSelector((state) => state.chats.searchResult);

    const dispatch = useDispatch();

    const handleSearch = (e) => {
        e.preventDefault();
        // calling action
        dispatch(searchConversation({
            name: search
        }))
        setSearch('');
    }

    return (
        <div className="chat-left">
            <div className="chat-left-header">
                <div className="chat-left-header-title">
                    <h2>Chats</h2>
                    <Link to="/" className="btn-icon"><i class="fa-solid fa-house-chimney"></i></Link>
                    <button className="btn-icon" onClick={(e) => setContacts(!contacts)}><i className="fa-regular fa-square-plus"></i></button>
                </div>
                <form onSubmit={handleSearch}>
                    <input type="text" className="form-custom" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..." />
                    <button className="btn-icon"><i className="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>

            {searchResult.length !== 0 ?
                
                <>
                    <span className="search-title"> Search Results</span>
                    <div className="user-list">
                    {searchResult.map((user, index) => (
                        <User user={user} key={`user-${index}`} />
                    ))}
                </div>
                </>

                :
                <div className="user-list">
                    {loggedInUser.conversations.map((user, index) => (
                        <User user={user} key={`user-${index}`} />
                    ))}
                </div>

            }

            {contacts ? <Modal toggle={{ state: contacts, handler: setContacts }} /> : ''}
        </div>
    )
}


export default Conversation;