import React, {useEffect, useState} from 'react';

import {axiosService, userService} from "../../services";
import {User} from "../User/User";

const Users = ({serUserId}) => {
    const [users, setUsers]=useState([])
    useEffect(()=>{
        // userService.getAll().then(value=>value.data).then(value=>setUsers([...value]))}
    userService.getAll().then(({data})=>setUsers([...data]))}
        ,[])
    return (
        <div>
            {users.map(user=><User key={user.id}
                                   user={user} setUserId={serUserId}
            />)}
        </div>
    );
};

export {Users};