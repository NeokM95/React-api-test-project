import React from 'react';
import { NavLink } from "react-router-dom";
import Exercise from "../../other-components/Excercise/Exercise";

import './UserPage.css'

import iconDivision from "../../other-components/assets/division.svg"
import iconMaths from "../../other-components/assets/maths.svg"
import iconMultiply from "../../other-components/assets/multiply.svg"
import iconLottery from "../../other-components/assets/lottery.svg"
import iconIndian from "../../other-components/assets/indian.svg"


const UserPage = () => {


    return (


        <>
            <h1> Welkom op de user page!</h1>
            <NavLink className="home" to="/">Terug naar home</NavLink>
            <div className="all-exercise-container">
                <Exercise exerciseName="Plus en Min" icon={ iconMaths }/>
                <Exercise exerciseName="Vermenigvuldigen" icon={ iconMultiply }/>
                <Exercise exerciseName="Delen" icon={ iconDivision }/>
                <Exercise exerciseName="Binnen Buiten" icon={ iconLottery }/>
                <Exercise exerciseName="" icon={iconIndian}/>
                <Exercise exerciseName="" icon={iconIndian}/>
                <Exercise exerciseName="" icon={iconIndian}/>
                <Exercise exerciseName="" icon={iconIndian}/>
                <Exercise exerciseName="" icon={iconIndian}/>
                <Exercise exerciseName="" icon={iconIndian}/>
                <Exercise exerciseName="" icon={iconIndian}/>
                <Exercise exerciseName="" icon={iconIndian}/>
            </div>

            <button>Play</button>

        </>
    );
};

export default UserPage;