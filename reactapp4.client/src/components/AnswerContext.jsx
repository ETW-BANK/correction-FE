import React, { createContext, useContext, useState } from 'react';

export const AnswerContext = createContext();

export const useAnswers = () => useContext(AnswerContext);

export const AnswerProvider = ({ children }) => {
    const [answers, setAnswers] = useState({
        city: '',
        date: '',
        party: [],
        budget: [],
        activities: [],
        food: [],
        active: [],
        events: [] // This will store the number of days
    });

    return (
        <AnswerContext.Provider value={{ answers, setAnswers }}>
            {children}
        </AnswerContext.Provider>
    );
};
