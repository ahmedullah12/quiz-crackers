import React from 'react';


const QuesOptions = ({option, handleCorrectAnsCheck}) => {
    return (
        <div className='bg-slate-600  text-white h-full rounded p-3 '>
            <button onClick={() => handleCorrectAnsCheck(option)} className='text-center'>{option}</button>
            
        </div>
    );
};

export default QuesOptions;