import React from 'react';
import { NavLink } from "react-router-dom";
import Exercise from "../../other-components/Excercise/Exercise";


const UserPage = () => {

    return (

        <div>
            <h1> Welkom op de user page!</h1>
            <NavLink className="home" to="/">Terug naar home</NavLink>
            <div className="all-exercise-container">
                <Exercise oefening-naam="Plus en Min"/>
                <Exercise oefening-naam="Vermenigvuldigen"/>
                <Exercise oefening-naam="Delen"/>
                <Exercise oefening-naam="Binnen Buiten"/>
                <Exercise oefening-naam=""/>
                <Exercise oefening-naam=""/>
                <Exercise oefening-naam=""/>
                <Exercise oefening-naam=""/>
                <Exercise oefening-naam=""/>
                <Exercise oefening-naam=""/>
                <Exercise oefening-naam=""/>
                <Exercise oefening-naam=""/>
            </div>
        </div>
    );
};

export default UserPage;