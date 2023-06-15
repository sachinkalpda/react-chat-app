import { Outlet } from "react-router-dom";
import Conversation from "./Conversations";


const Layout = () => {
    return (
        <div className="container">
            <div className="chat-container">
                {/* left section */}
                <Conversation />

                {/* right section */}
                <Outlet />


            </div>
        </div>
    )
}


export default Layout;