/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import Cookies from 'js-cookie'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'



const GetAllUsers = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate= useNavigate()
    
    useEffect(() => {
        const getUsers = async () => {
            setLoading(true)
            try {
                
                const token =  Cookies.get("jwt")
                const response = await axios.get("/api/user/getAllUsers", {
                    credentials:"include",
                    headers: {
                        Authorization: `Bearer ${token}`
                    }  
                })

                
                setAllUsers(response.data.allUsers);
                // console.log(response.data.allUsers)
                setLoading(false)
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    console.log("Token expired, redirecting to login...");
                    // Navigate to the login page
                    Cookies.remove("jwt");
                    navigate("/login");
                } else {
                    console.log("Error Fetching Users" + error)
                }
            }
        }
        getUsers()
    }, [navigate])

    return [allUsers,loading]
}

export default GetAllUsers
