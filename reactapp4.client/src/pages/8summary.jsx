import React from 'react';
import { Link } from 'react-router-dom';
import { useAnswers } from '../components/AnswerContext';
import { useChoice } from '../components/landingchoice-logic';

function Result() {
    const { answers } = useAnswers();
    const { aiHelp } = useChoice();

    const categories = [
        { title: 'You plan to travel with...', key: 'party' },
        { title: 'Your budget is...', key: 'budget' },
        { title: 'You want to explore...', key: 'activities' },
        { title: 'You want to eat...', key: 'food' },
        { title: 'aojdfj', key: 'active'},
        { title: 'The events you want to see are...', key: 'events' }
    ];

    return (
        <div>
            <div>Edit</div>

            {categories.map(category => (
                <div>
                    <h1>{category.title}</h1>
                    {answers[category.key].map(item => <button key={item}>{item}</button>)}
                </div>
            ))}

            <div>
                <div><Link to="/"><button>Exit</button></Link></div>
                {aiHelp !== null && (
                    <Link to={aiHelp ? "/airesult" : "/manresult"}><button>CBA</button></Link>
                )}
            </div>
        </div>
    );
}

export default Result;