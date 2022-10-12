import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';


const Home = () => {
    const quizzesObj = useLoaderData();
    const quizzes = quizzesObj.data;
    
    return (
        <div className='container m-auto mb-20'>
            <Header></Header>

            <h2 className='text-4xl font-bold text-start mt-10 mb-5'>Here are today's Quizzes: </h2>
            <div className='w-full lg:w-1/2 justify-center grid lg:grid-cols-2 sm:grid-cols-1 gap-10 m-auto'>
                {
                    quizzes.map(quiz => <Quiz key={quiz.id} quiz={quiz}></Quiz>)
                }
           </div>
        </div>
    );
};

export default Home;