import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';
import { useSelection, Toggle } from '../components/button';
import style from '../style.module.css';

function Activities() {
    const { answers, setAnswers } = useAnswers();

    const handleActivitiesSelect = (choice) => {
        setAnswers({ ...answers, activities: [...answers.activities, choice] })
    };

    const [selectedOption, handleSel] = useSelection();


    return (
        <div className={style.mainContainer}>
            <div className={style.imgBox}></div>
            <div className={style.box}>
                <div className={style.progressContainer}>
                    <p className={style.progressText}>4 of 7</p>
                    <div className={style.progress}>
                        <div className={style.line4} />
                    </div>
                </div>
                <h1 className={style.formText}>What Activities Are You Interested In?</h1>
                <div className={style.formContainer}>
                    {['Stränder', 'Nattliv', 'Mat', 'Adrenalin Höjare', 'Sevärdigheter', 'Evenemang', 'Nöjesparker'].map(choice => (
                        <Toggle
                            key={choice}
                            value={choice}
                            selected={selectedOption === choice}
                            handleSel={handleSel}
                            handleChoice={handleActivitiesSelect}
                        />
                    ))}
                </div>
                <div className={style.btnContainer}>
                    <Link to="/budget"><button className={style.desButton} type="button">Back</button></Link>
                    <Link to="/food"><button className={style.desButton} type="button">Next</button></Link>
                </div>
            </div>
        </div>
    );
}
export default Activities;