import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';
import { Toggle, useSelection } from '../components/button';
import style from '../style.module.css';

function Food() {
    const { answers, setAnswers } = useAnswers();

    const handleFoodSelect = (choice) => {
        setAnswers({ ...answers, food: [...answers.food, choice] })
    };

    const [selectedOption, handleSel] = useSelection();

    return (
        <div className={style.mainContainer}>
            <div className={style.imgBox}></div>
            <div className={style.box}>
                <div className={style.progressContainer}>
                <p className={style.progressText}>5 of 7</p>
                    <div className={style.progress}>
                        <div className={style.line5} />
                    </div>
                </div>
                <h1 className={style.formText}>What Kind of Food Do You Want?</h1>
                <div className={style.formContainer}>
                    {['Vegan', 'Meat & Fish', 'Pizza', 'i eat everything'].map(choice => (
                        <Toggle
                            key={choice}
                            value={choice}
                            selected={selectedOption === choice}
                            handleSel={handleSel}
                            handleChoice={handleFoodSelect}
                        />
                    ))}
                </div>
                <div className={style.btnContainer}>
                    <Link to="/activites"><button className={style.desButton} type="button">Back</button></Link>
                    <Link to="/events"><button className={style.desButton} type="button">Next</button></Link>
                </div>
            </div>
        </div>
    );
}
export default Food;