import { useDispatch, useSelector } from "react-redux";
import { createRoom } from "../store/reducers";
import {  useNavigate } from "react-router-dom";
import userImg from '../images/user.png';

const Modal = ({toggle}) => {
    const users = useSelector((state) => state.chats.users);
    const loggedUser = useSelector((state) => state.chats.loggedInUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    // function for adding new conversation
    const handleClickOnParent = (e) => {
        e.preventDefault();
        if(e.target === e.currentTarget){
            toggle.handler(!toggle.state)
        }
    }

    const contactHandler = (reciever) => {
        // calling action
        dispatch(createRoom({
            sender : loggedUser.id,
            reciever
        }));
        toggle.handler(!toggle.state);
        // redirect to selected converation
        navigate(`/chat/${reciever.id}/${loggedUser.id}-${reciever.id}`);   
    }
    return (
        <div className="modal-container" onClick={handleClickOnParent}>
            <div className="modal">
                <div className="modal-header">
                    <h3>Contacts</h3>
                </div>
                <div className="modal-body">
                    {users.map((user) => (
                        <div className="user-item" key={`user-${user.id}`} onClick={() => contactHandler(user)}>
                            <div className="user-item-image">
                                <img src={userImg} alt="" />
                            </div>
                            <div className="user-item-details">
                                <div className="title-heading">
                                    <div className="title">{user.name}</div>
                                </div>
                            </div>
                        </div>
                    ))}


                </div>
            </div>
        </div>
    )
}

export default Modal;