/* eslint-disable no-unused-vars */
import axios from 'axios'
import { useState } from 'react'
import { TbLogout2 } from 'react-icons/tb'
import Cookies from 'js-cookie'
import toast from 'react-hot-toast'

const Logout = () => {

    const [loading,setLoading]=useState(false)
    
    const handleLogout= async()=>{
        setLoading(true);
        try {
            
            const res = await axios.post('/api/user/logout')
            localStorage.removeItem('messenger');
            Cookies.remove('jwt')
            setLoading(false);
            toast.success("Logout Successfully")
    
        } catch (error) {
         console.log(error)   
         toast.error("Failed to logout")
        }
    }
    return (
        <div className='w-[4%] bg-slate-950 text-white flex flex-col justify-end'>
            <div
                className='p-3 align-bottom'
            >
                <button
                >
                    <TbLogout2
                        className='text-5xl p-2 hover:bg-gray-600 rounded duration-300'
                        onClick={handleLogout}

                    />
                </button>
            </div>
        </div>
    )
}

export default Logout
