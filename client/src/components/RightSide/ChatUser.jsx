import { useSocketContext } from "../../context/SocketContext.jsx";
import useConversation from "../../stateMgm/useConversation.js"

const ChatUser = () => {
    const {selectedConversation} = useConversation()
    const {onlineUsers}=useSocketContext();
    const getOnlineStatus = (userId)=>{
        return onlineUsers.includes(userId) ? "online":"offline"
    }

    return (
        <>
            <div className="pl-5 pt-5 h-[12vh] flex space-x-4 m-3 bg-gray-900 hover:bg-gray-600">
                <div>
                    <div className="avatar online">
                        <div className="w-14 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </div>
                <div>
                    <h1
                        className="text-xl"
                    >{selectedConversation?.name}</h1>
                    <span>{getOnlineStatus(selectedConversation._id)}</span>
                </div>
            </div>
        </>

    )
}

export default ChatUser
