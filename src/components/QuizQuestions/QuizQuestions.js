import React from 'react';
import QuesOptions from '../QuesOptions/QuesOptions';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const QuizQuestions = ({ques}) => {
    console.log(ques)
    const {question, options} = ques;
    
    const handleCorrectAnsCheck = (option) => {
        if(option === ques.correctAnswer){
            alert('You have chosen the correct answer')
        }
        else{
            alert('You have choosen the wrong asnwer')
        }
    }
    
    return (
        <div className='lg:w-1/2 m-auto my-5 p-5 grid justify-items-center border-2 border-slate-700 rounded'>
            <div  className='w-full flex justify-between  items-center '>
                <h1 className=' mb-3 text-xl font-bold'>Question   : {question.slice(3, -4)}</h1>
                <FontAwesomeIcon className='mb-1' icon={faEye}></FontAwesomeIcon>
            </div>
            
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3   items-center '>
                {
                    options.map(option => <QuesOptions key={option} handleCorrectAnsCheck={handleCorrectAnsCheck} option={option}></QuesOptions>)
                }
            </div>
        </div>
    );
};

export default QuizQuestions;