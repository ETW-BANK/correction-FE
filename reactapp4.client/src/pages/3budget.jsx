import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';
import style from '../style.module.css';

import { useSelection, Toggle } from '../components/button';
function Budget() {
    const { answers, setAnswers } = useAnswers();

    const handleBudgetSelect = (choice) => {
        setAnswers({ ...answers, budget: [...answers.budget, choice] })
    };


    const [selectedOption, handleSel] = useSelection();

    return (
        <div className={style.mainContainer}>
            <div className={style.imgBox}></div>
            <div className={style.box}>
                <div className={style.progressContainer}>
                    <p className={style.progressText}>3 of 7</p>
                    <div className={style.progress}>
                        <div className={style.line3} />
                    </div>
                </div>
                <h1 className={style.formText}>What Is Your Budget?</h1>
                <div className={style.formContainer}>
                    {['Low', 'Medium', 'High', 'None of your buisness'].map(choice => (
                        <Toggle
                            key={choice}
                            value={choice}
                            selected={selectedOption === choice}
                            handleSel={handleSel}
                            handleChoice={handleBudgetSelect}
                        />
                    ))}
                </div>
                <div className={style.btnContainer}>
                    <Link to="/party"><button className={style.desButton} type="button">Back</button></Link>
                    <Link to="/activites"><button className={style.desButton} type="button">Next</button></Link>
                </div>
            </div>
        </div>
    );
}
export default Budget;