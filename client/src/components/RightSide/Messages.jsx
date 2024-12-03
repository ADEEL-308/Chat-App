import useGetMsg from "../../context/useGetMsg.js"
import Message from "../utlis/Message.jsx"
import Loading from '../forms/Loading.jsx'
import { useEffect, useRef } from "react"
import useGetSocketMsg from "../../context/useGetSocketMsg.jsx"
const Messages = () => {
  const { messages, loading } = useGetMsg()
  useGetSocketMsg()
  // console.log(messages.length);

  const lastMsgRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 100)

  }, [messages])
  return (

    <>
      {loading ? (<Loading />) : (messages.length > 0 && messages.map((message) => 
        <div key={message._id} ref={lastMsgRef}>

          <Message message={message} />
        </div>
      ))}
      <div className="" style={{ minHeight: "calc(88vh - 10vh)" }}>
        {!loading && messages.length === 0 && <div><p className="text-center mt-[20%] font-sans">Say Hi</p></div>}

      </div>
    </>
  )
}

export default Messages
