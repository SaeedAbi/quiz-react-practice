import React from 'react';
import {useQuiz} from "../../Context/QuizContext";

const FinishedScreen = () => {
    const {points,maxPossiblePoints,highScore,dispatch}=useQuiz()
    const percentage=(points/maxPossiblePoints)*100

    let emoji
    if(percentage ===100) emoji='🥇🥇'
    if(percentage>80 && percentage!== 100) emoji='🎉🎉'
    if(percentage>50 && percentage!== 80) emoji='😀😀'
    if(percentage>0 && percentage!== 50) emoji='🤔🤔'
    if(percentage ===0) emoji='🤦🤦';


    return (
        <>
        <p className='result'>
          <span>{emoji}</span>  You Scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
        </p>
        <p className='highscore'>(Highscore: {highScore} points)</p>

            <button className='btn' onClick={()=>dispatch({type:'restart'})}>Restart quiz</button>
        </>
    );
};

export default FinishedScreen;