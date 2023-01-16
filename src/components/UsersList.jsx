import axios from 'axios';
import React, { useEffect, useState } from 'react';

const UsersList = ({ userSelect, usersList, getUsers }) => {

    const usersListOrd = usersList.sort((a, b) => a.first_name.localeCompare(b.first_name))
    const deleteUser = (user) => {
        axios.delete(`https://users-crud.academlo.tech/users/${user.id}/`)
            .then(() => getUsers());
        swal({
            title: "User Deleted",
            icon: "success",
            timer: "1500",
        })
    }
    return (
        <div >
            <h1>Users List</h1>
            <div className='card-list'>
                <ul className="list">
                    {usersListOrd.map((user) => (
                        <li key={user.id} className="card">
                            <div className='card-li'>
                                <ul>
                                    <li>
                                        <b>name: </b>
                                        {user.first_name} {user.last_name}
                                    </li>
                                    <li>
                                        <b>email: </b>
                                        {user.email}
                                    </li>
                                    <li>
                                        <b>date: </b>
                                        {user.birthday}
                                    </li>
                                </ul>
                            </div>

                            <button onClick={() => userSelect(user)}><i class='bx bx-add-to-queue'></i></button>
                            <button onClick={() => deleteUser(user)}><i class='bx bx-trash'></i></button>
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    );
};

export default UsersList;