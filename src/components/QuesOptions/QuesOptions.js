import React from 'react';


const QuesOptions = ({option}) => {
    return (
        <div className='bg-slate-600 text-white h-full rounded p-3 flex  items-center'>
            <input className='mr-3' type="radio" id="html" name="fav_language" value={option}/>
            <label  for="html">{option}</label>
            
        </div>
    );
};

export default QuesOptions;