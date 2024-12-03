/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import useConversation from '../stateMgm/useConversation.js'
import axios from 'axios';
const useGetMsg = () => {
    const [ loading, setLoading ] = useState(false)
    const {messages,setMessages,selectedConversation}=useConversation();
   
   useEffect(()=>{
    const getMessages=async()=>{
        setLoading(true);
        if(selectedConversation && selectedConversation._id){
            try {
                const response =await axios.get(
                    `/api/message/get/${selectedConversation._id}`
                );
                setMessages(response.data);
                setLoading(false)
            } catch (error) {
    
                console.log("Error in useGetMsg:", error);
                
            }
        }
    };
    getMessages()
   },[selectedConversation,setMessages])
   
   
    return {
        messages,
        loading
    }
}

export default useGetMsg
