import { useState } from 'react'
import useConversation from '../stateMgm/useConversation.js'
import axios from 'axios'

const useSendMsg = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation();

    const sendMessages = async (message) => {
        setLoading(true);
        if (selectedConversation && selectedConversation._id) {
            try {
                const response = await axios.post(
                    `/api/message/send/${selectedConversation._id}`, { message }
                );
                setMessages([...messages, response.data]);
                setLoading(false)
            } catch (error) {

                console.log("Error in useSendMsg:", error);

            }
        }
    };


    return (
        {
            loading,
            sendMessages
        }
    )
}

export default useSendMsg
