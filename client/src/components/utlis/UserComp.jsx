/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { useSocketContext } from "../../context/SocketContext.jsx";
import useConversation from "../../stateMgm/useConversation.js"

const UserComp = ({ user }) => {

    const { selectedConversation, setSelectedConversation } = useConversation();
    const isSelected = selectedConversation?._id === user._id;
    const {socket,onlineUsers}=useSocketContext();
    const isOnline = onlineUsers.includes(user._id);
    return (
        <div
            className={`hover:bg-slate-600 duration-300 ${isSelected ? "bg-slate-700" : ""}`}
            onClick={()=>setSelectedConversation(user)}
        >

            <div className="flex space-x-4 px-8 py-6 hover:bg-slate-400 duration-300 cursor-pointer">
                <div className={`avatar ${isOnline ? "online":""}`}>
                    <div className="w-14 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>

                <div>
                    <h1 className="font-bold">{user.name}</h1>
                    <span>
                        {user.email}
                    </span>

                </div>
            </div>
        </div>
    )
}

export default UserComp
