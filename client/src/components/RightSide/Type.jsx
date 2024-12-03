/* eslint-disable no-unused-vars */
import { IoSend } from "react-icons/io5"
import useSendMsg from "../../context/useSendMsg"
import { useState } from "react"

const Type = () => {
    const { loading, sendMessages } = useSendMsg()
    const [ message, setMessage ] = useState("")

    const handleSubmit=async(e)=>{
        e.preventDefault()
        await sendMessages(message);
        setMessage("")
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="flex space-x-3 h-[8vh] text-center bg-gray-700">

                    <div className="w-[70%] mx-4">
                        <input
                            type="text"
                            placeholder="Type here"
                            className="border-[1px] border-gray-700 rounded-xl flex items-center w-full max-w-ws grow outline-none bg-slate-900 py-3 px-3 mt-1"
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value)
                            }}
                        />
                    </div>
                    <button
                        className="text-3xl"
                    >
                        <IoSend />
                    </button>
                </div>
            </form>
        </>
    )
}

export default Type
