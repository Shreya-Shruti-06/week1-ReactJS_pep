import React, {useState} from "react";
import UserDetails from "./UserDetails";
import Test from "./Test";

const AllUserList =() =>{
    const [state,setState] = useState({
        name : "Shreya Shruti",
    });
    

     let allUser =[{
        name: "Shreya",
        email: "shreya@gmail.com",
        phoneNumber: "9654733"
    },
    {
        name: "Shruti",
        email: "shruti@gmail.com",
        phoneNumber: "657849900"
    },
    {
        name: "Shreyash",
        email: "shreyash@gmail.com",
        phoneNumber: "98654324"
    },
    {
        name: "Shreyashi",
        email: "shreyashi@gmail.com",
        phoneNumber: "09876543"
    }
    ];

    let setStateName = (name) =>
    {
        setState({...state, name});
    };


return (
    <div>
        <Test user = {state.name} setName = {setStateName}/>
        {allUser.map((user, index) => (
            <UserDetails key={index} user={user} />
        ))}
    </div>
);
        }
export default AllUserList;