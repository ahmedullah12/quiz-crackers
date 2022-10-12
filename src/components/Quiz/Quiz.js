import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({quiz}) => {
    console.log(quiz)
    const {id, name, logo, total} = quiz;
    return (
        <div className='bg-slate-600 w-full text-white rounded  p-10' >
            <img className='m-auto' width={"200px"} src={logo} alt="" />
            <h3 className='text-2xl text-start'>Topic name: {name}</h3>
            <p className='text-start mb-5'>Total quizzes : {total}</p>
            <Link to={`/${id}`} className='bg-orange-500  p-2 rounded text-white'>See The Quizzes</Link>
        </div>
    );
};

export default Quiz;