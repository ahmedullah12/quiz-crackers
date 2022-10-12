import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizQuestions from '../QuizQuestions/QuizQuestions';

const QuizDetails = () => {
    const quizObj = useLoaderData();
    const quiz = quizObj.data;
    const { name, questions} = quiz
    console.log(quiz);
    return (
        <div className='container m-auto'>
            <h1 className='text-3xl font-bold'>Quiz Topic is {name}</h1>

            <div className='p-5 lg:p-0'>
                {
                    questions.map(ques => <QuizQuestions key={ques.id}  ques={ques}>Question number </QuizQuestions>)
                }
            </div>
        </div>
    );
};

export default QuizDetails;