/* eslint-disable react/prop-types */

const Message = ({ message }) => {
    const authUser=JSON.parse(localStorage.getItem("messenger"));
    const currentUser= message.senderId===authUser.user._id;
    const chatName = currentUser ? "chat-end" :"chat-start";
    const chatColor = currentUser ? "bg-blue-400" : ""
   const createdAt = new Date(message.createdAt)
    const formattedTime = createdAt.toLocaleTimeString([],{
        hour:'2-digit',
        minute:"2-digit"
    })
    
    return (
        <div className="p-4">
            <div
                className={`chat ${chatName}`}
            >
                <div
                    className={`chat-bubble text-white ${chatColor}`}
                >
                    {message.message}

                </div>
                <div>
                    {formattedTime}
                </div>
            </div>

           
        </div>
    )
}

export default Message
