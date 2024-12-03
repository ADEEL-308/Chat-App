/* eslint-disable no-unused-vars */
import GetAllUsers from "../../context/GetAllUsers"
import UserComp from "../utlis/UserComp"

const Users = () => {
    const [allUsers, loading] = GetAllUsers();
    console.log(allUsers);
    
    return (
        <div className="my-1 overflow-y-auto hide-scrollbar" style={{ maxHeight: "calc(92vh - 10vh)" }}>
            {
                allUsers.map((user, index) => {
                   return <UserComp key={index} user={user} />

                })
            }


        </div>
    )
}

export default Users
