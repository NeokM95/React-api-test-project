import React from 'react';
import './AdminPage.css';
import swal from 'sweetalert';

import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";


const AdminPage = () => {

    const { register, handleSubmit, reset } = useForm();
    const [ userDisplay, setUserDisplay ] = React.useState( "" );
    const [ hide, setHide ] = React.useState( "hide" )
    const [ hideCloseUsers, setHideCloseUsers ] = React.useState( "hide" )
    const [errorMessage, setErrorMessage ] = React.useState("")

    const API_URL = 'http://localhost:8081/users';
    const axios = require( 'axios' ).default;

    async function showUsers() {
        try {
            //Make API CALL
            const api_call = `${ API_URL }`
            const result = await axios( api_call )

            console.log( result )

            let output = result.data.map( ( user ) => {
                let userID = user.id

                return <li key={ user.username } className="user-list-item">
                    <div className="user-data">
                        <div>{ user.username }</div>
                        <div>{ user.role }</div>
                    </div>
                    <div className="delete-btn" onClick={ () => deleteUser( { userID } ) }>×</div>
                </li>
            } )


            setUserDisplay( output )
            setHide( "" )
            setHideCloseUsers( "" )


        } catch {
            console.log( "Anders dan verwacht.." )
        }
    }

    async function createUser( data ) {

        try {
            const api_call = `http://localhost:8081/users/check-if-exists?username=${ data.username }`
            const result = await axios( api_call )

            console.log(result)

            setErrorMessage(`User met gebruikersnaam ${data.username} bestaat al`)


        } catch {
            axios( {
                method: 'post',
                url: API_URL,
                data: {
                    username: data.username,
                    password: data.password,
                    role: data.role
                }
            } ).then(showUsers)

            setErrorMessage("")
        }


        reset( { username: "", password: "", role: "user" } )

    }

    async function deleteUser( user_id ) {

        const userID = user_id.userID.toString()

        swal( {
            title: "Are you sure?",
            text: "Are you sure that you want to delete this user?",
            icon: "warning",
            buttons: {
                agree: {
                    text: "yes",
                    value: 1
                },
                deny: "no",
            },
            dangerMode: true,
        } ).then( async ( value ) => {
                if ( value === 1 ) {
                    await axios.delete( `http://localhost:8081/users/${ userID }` )
                        .then(showUsers)
                }
            }
        )
    }

    function closeUsers (){
        setHideCloseUsers ("hide")
        setHide("hide")
    }


    return (
        <>
            <div className="upper-container">
                <div className="admin-page-container">
                    <h1>Welkom op de admin page</h1>
                    <div className="open-close-users">
                        <button onClick={ showUsers }>Laat alle users zien</button>
                        <div className={ hideCloseUsers } id="close-users" onClick={closeUsers}> ×</div>
                    </div>
                    <ul className={ hide } id="users-display">{ userDisplay } </ul>

                </div>

                <form onSubmit={ handleSubmit( createUser ) }>

                    <label htmlFor="username">
                        username
                        <input type="text"
                               id="username"
                               { ...register( "username" ) }
                        />
                    </label>

                    <label htmlFor="password">
                        password
                        <input type="password"
                               id="password"
                               { ...register( "password" ) }
                        />
                    </label>

                    <label htmlFor="role">
                        <select id="role" { ...register( "role" ) }>
                            <option value="user">user</option>
                            <option value="admin">admin</option>
                        </select>
                    </label>

                    <input id="create-user" type="submit" value="Create User"/>

                </form>

                <h3 className="error-message-admin">{errorMessage}</h3>

                <NavLink className="home" to="/">Terug naar home</NavLink>
            </div>
        </>
    );
};

export default AdminPage;