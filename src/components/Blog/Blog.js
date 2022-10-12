import React from 'react';

const Blog = () => {
    return (
        <div className='mt-10 mb-10'>
            <h1 className='text-3xl underline'>Here are some important Questions and their Answers</h1>
            <div className='w-1/2 m-auto mt-10 border-2 border-slate-500 p-5 rounded'>
                <h2 className='text-2xl font-bold '>Question 1: What is the purpose of react router?</h2>
                <p><span className='text-xl font-bold'>Ans: </span> React Router is a JavaScript library used to handle client and server-side routing in React applications. It allows the creation of single-page web or mobile apps that allows navigation without the page refreshing.It is mainly use for creating a single page website or application</p>
            </div>
            <div className='w-1/2 m-auto mt-10 border-2 border-slate-500 p-5 rounded'>
                <h2 className='text-2xl font-bold '>Question 1: How does context api works?</h2>
                <p><span className='text-xl font-bold'>Ans: </span> React Context Api allows us to pass data through our component trees, giving our components the ability to communicate and share data at different levels.The React Context API is a way for a React app to effectively produce global variables that can be passed around.</p>
            </div>
            <div className='w-1/2 m-auto mt-10 border-2 border-slate-500 p-5 rounded'>
                <h2 className='text-2xl font-bold '>Question 1: What is UseRef and what is it used for?</h2>
                <p><span className='text-xl font-bold'>Ans: </span>useRef is like a box that can hold a mutable value in its current property. It's handy for keeping any mutable value around similar to how you'd use instance fields in classes. The only difference between useRef() and creating a  object yourself is that useRef will give you the same ref object on every render.</p>
            </div>
        </div>
    );
};
// 
// 
// what is useRef  
export default Blog;