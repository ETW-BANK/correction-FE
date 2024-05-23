import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';
import { useSelection, Toggle } from '../components/button.jsx';
import style from '../style.module.css'

const Party = () => {
    const { answers, setAnswers } = useAnswers();

    const handlePartySelect = (choice) => {
        setAnswers({ ...answers, party: [...answers.party, choice] })
    }


    const [selectedOption, handleSel] = useSelection();

    return (
        <div className={style.mainContainer}>
            <div className={style.imgBox}></div>
            <div className={style.box}>
                <div className={style.progressContainer}>
                    <p className={style.progressText}>2 of 7</p>
                    <div className={style.progress}>
                        <div className={style.line2} />
                    </div>
                </div>

                <h2 className={style.formText}>Who do you plan on traveling with on your next adventure?</h2>
                <div className={style.formContainer}>
                    {['Alone', 'Couple', 'Family', 'Friends'].map(choice => (
                        <Toggle
                            key={choice}
                            value={choice}
                            selected={selectedOption === choice}
                            handleSel={handleSel}
                            handleChoice={handlePartySelect}
                        />
                    ))}
                </div>

                <div className={style.btnContainer}>
                    <div><Link to="/destination"><button className={style.desButton}>Back</button></Link></div>
                    <div><Link to="/budget"><button className={style.desButton} type="submit">Submit</button></Link></div>
                </div>
            </div>
        </div>
    )
}
export default Party;