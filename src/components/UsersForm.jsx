import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const UsersForm = ({ userSelect, userSelected, getUsers }) => {
    const emptyUser = { first_name: "", last_name: "", email: "", birthday: "" };

    const { handleSubmit, register, reset } = useForm();
    useEffect(() => {
        if (userSelected) {
            reset(userSelected);
        } else {
            reset(emptyUser);
        }
    }, [userSelected]);

    const upload = (user) => {
        if (userSelected) {
            axios
                .put(`https://users-crud.academlo.tech/users/${userSelected.id}/`, user)
                .then(() => {
                    getUsers();
                    userSelect(null);
                    swal({
                        title: "User actualizado",
                        icon: "success",
                        timer: "1500",
                    })
                });

        } else {
            axios.post(`https://users-crud.academlo.tech/users/`, user)
                .then(() => {
                    getUsers();
                    reset(emptyUser);
                });
            swal({
                title: "User Sucesfull",
                icon: "success",
                timer: "1500",
            })
        }
    };

    return (

        <form onSubmit={handleSubmit(upload)} id="card-form">
            <div className='input-container'>
                <h2>Formulario Users</h2>
                <div >
                    <div>
                        <label htmlFor="first_name" ><i class='bx bx-user'> </i></label>
                        <input className='input-name' type="text" placeholder='firts name' id='first_name'  {...register("first_name")} />
                        <label htmlFor="last_name" ></label>
                        <input className='input-name' type="text" placeholder='last name' id='last_name'  {...register("last_name")} />
                    </div>
                </div>
                <div >
                    <label htmlFor="email"><i class='bx bxs-envelope'></i></label>
                    <input className='input' type="email" placeholder='email' id='email'  {...register("email")} />
                </div>
                <div >
                    <label htmlFor="password"><i class='bx bxs-lock'></i></label>
                    <input className='input' type="password" placeholder='password' id='password'  {...register("password")} />
                </div>
                <div >
                    <label htmlFor="birthday"><i class='bx bx-cake'></i></label>
                    <input className='input' type="date" id='birthday'  {...register("birthday")} />
                </div>
                <button className='button-input'>upload</button>
            </div>

        </form>
    );
};

export default UsersForm;