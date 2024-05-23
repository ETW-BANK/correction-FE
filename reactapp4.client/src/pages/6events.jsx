import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';
import { useSelection, Toggle } from '../components/button';
import style from '../style.module.css';

function Events() {
    const { answers, setAnswers } = useAnswers();

    const handleEventSelect = (choice) => {
        setAnswers({ ...answers, events: [...answers.events, choice] })
    };

    const [selectedOption, handleSel] = useSelection();

    return (
        <div className={style.mainContainer}>
            <div className={style.imgBox}></div>
            <div className={style.box}>
                <div className={style.progressContainer}>
                    <p className={style.progressText}>6 of 7</p>
                    <div className={style.progress}>
                        <div className={style.line6} />
                    </div>
                </div>
                <h1 className={style.formText}>What kind of events are you interested in?</h1>
                <div className={style.formContainer}>
                    {['Teather', 'Stand up', 'Sport', 'Everything'].map(choice => (
                        <Toggle
                            key={choice}
                            value={choice}
                            selected={selectedOption === choice}
                            handleSel={handleSel}
                            handleChoice={handleEventSelect}
                        />
                    ))}
                </div>
                <div className={style.btnContainer}>
                    <Link to="/food"><button className={style.desButton} type="button">Back</button></Link>
                    <Link to="/active"><button className={style.desButton} type="button">Next</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Events;