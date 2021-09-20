import React from 'react';
import { useForm } from "react-hook-form";

import './Login.css';

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [ errorMessageUsername, setErrorMessageUsername ] = React.useState( "" );
    const [ errorMessagePassword, setErrorMessagePassword ] = React.useState( "" );
    const [ hideUsernameError, setHideUsernameError ] = React.useState( "" );
    const [ hidePasswordError, setHidePasswordError ] = React.useState( "" );


    const API_URL = 'http://localhost:8081/users';
    const axios = require( 'axios' ).default;

    async function onLoginAttempt( data ) {


        try {
            //Make API CALL
            const api_call = `${ API_URL }/check-if-exists?username=${ data.username }`
            const result = await axios( api_call )

            //Store data-password and input-password
            const pwResult = result.data.password
            const pwInput = data.password

            // Set all errormessage states to the right value in all possible situations
            if ( data.username === result.data.username ) {
                setErrorMessageUsername( "" )
                setHidePasswordError("hide")
            }

            if ( data.password === result.data.password ) {
                setErrorMessagePassword( "" )
            }

            if ( pwResult === pwInput ) {
                let name = data.username
                if (result.data.role === "admin"){
                    window.location.href = "/admin"
                } else {
                    window.location.href = "/user"
                }
            } else {
                setErrorMessagePassword( "Wachtwoord onjuist" )
            }


        } catch {
            setErrorMessageUsername( `User ${ data.username } is niet gevonden.` )
            setHideUsernameError( "hide" )
        }

    }

    function onNoSubmitClick (){
        setErrorMessageUsername("")
        setHideUsernameError( "" )
        setErrorMessagePassword("")
        setHidePasswordError( "" )
    }

    return (
        <>
            <form onSubmit={ handleSubmit( onLoginAttempt ) }>

                <label htmlFor="username">Username:</label>
                <input type="text"
                       id="username"
                       { ...register( "username", {
                           required: "Voer een geldige gebruikersnaam in"
                       } )
                       }
                />
                <div className="error-box">
                    <div id={ hideUsernameError }>
                        { errors.username && <p className="error-message">
                            { errors.username.message }
                        </p> }
                    </div>
                    <p className="error-message">{ errorMessageUsername }</p>
                </div>


                <label htmlFor="password">Password:</label>
                <input id="password"
                       type="password"
                       { ...register( "password", {
                           required: "Voer uw wachtwoord in"
                       } )
                       }
                />
                <div className="error-box">
                    <div id={hidePasswordError}>
                    { errors.password && <p className="error-message">
                        { errors.password.message }
                    </p> }
                    </div>
                    <p className="error-message">{ errorMessagePassword }</p>
                </div>
                <input id="login" type="submit" onClick={onNoSubmitClick} value="LOGIN"/>

            </form>
        </>
    );
};

export default LoginPage;
