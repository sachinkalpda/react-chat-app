
import { Link } from "react-router-dom";
import userImg from '../images/user.png';
import { useSelector } from "react-redux";

const User = ({ user }) => {
    const reciever = useSelector((state) => state.chats.reciever);

    return (
        <>
            <Link to={`/chat/${user.id}/${user.room}`} >
                <div className={(Object.keys(reciever).length !== 0 && user.id === reciever.id)  ? 'user-item active' : 'user-item'}>
                    <div className="user-item-image">
                        <img src={userImg} alt="" />
                    </div>
                    <div className="user-item-details">
                        <div className="title-heading">
                            <div className="title">{user.name}</div>
                            <span>{new Intl.DateTimeFormat({hours: 'numeric', minuts : 'numeric'}).format(user.lastMessageTime)}</span>
                        </div>
                        <span>{user.lastMessage}</span>
                    </div>
                </div>
            </Link>
        </>
    )
}


export default User;