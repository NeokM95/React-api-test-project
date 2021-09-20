import React from 'react';
import './Exercise.css'



const Exercise = ({exerciseName, icon}) => {

    return (
        <div className="exercise-container">
            <h3>{exerciseName}</h3>
            <img className="ex-img" src={ icon } alt="img not found"/>
            <input className="ex-checkbox" type="checkbox"/>
        </div>
    );
};

export default Exercise;