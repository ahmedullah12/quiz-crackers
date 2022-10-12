import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const dataObj = useLoaderData();
    const data = dataObj.data;
   console.log(data)
    
    return (
       
        <div>
             <h1 className='text-2xl lg:text-3xl font-bold mb-20'>Here is a chart of total quizes number</h1>
           <ResponsiveContainer  width={"75%"} height={200}>
                <LineChart width={500}  data={data}>
                    <Line type="monotone" dataKey="total" stroke="#000000" strokeWidth={2} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;