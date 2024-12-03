import { useEffect } from "react"
import useConversation from "../../stateMgm/useConversation"
import ChatUser from "./ChatUser"
import Messages from "./Messages"
import Type from "./Type"
import { useAuth } from "../../context/AuthProvider"

const Right = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null)
  }, [setSelectedConversation])
  return (
    <div className=" bg-slate-950 w-full">
      <div>
        {!selectedConversation ? (
          <NoChat />
        ) : (

          <>
            <ChatUser />
            <div
              className="py-2 overflow-y-auto hide-scrollbar"
              style={{ maxHeight: "calc(88vh - 12vh)" }}
            >
              <Messages />

            </div>
            <Type />

          </>)}
      </div>
    </div >
  )
}
export default Right

const NoChat = () => {
  const [authUser] = useAuth();

  return (
    <>
      <div
        className="flex h-screen items-center justify-center"
      >
        <h1
          className="font-semibold text-xl text-center"
        >
          No Conversation Selected
          <br/>
          Select a conversation to start a chat.
        </h1>

       
        {authUser.name && <NoChat />}

      </div>

    </>
  )
}

