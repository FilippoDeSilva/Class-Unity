"use client";

import Image from 'next/image';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Men',
    count: 50,
    fill: '#93c5fd',
  },
  {
    name: 'Women',
    count: 100,
    fill: '#f9a8d4',
  },
  {
    name: 'Total',
    count: '150',
    fill: 'white',
  },
];

const CountChart = () => {
  return (
    <div className='bg-white rounded-xl w-full h-full p-4'> {/* Added padding to the container */}
      {/* TITLE */}
      <div className='flex justify-between items-center mb-4'> {/* Adjusted margin-bottom */}
        <h1 className='text-lg font-semibold'>Students</h1>
        <Image src="/moreDark.png" alt='' width={20} height={20} />
      </div>
      {/* CHART */}
      <div className='relative w-full h-[60%] flex-wrap'>
        <ResponsiveContainer>
          <RadialBarChart cx="50%" cy="45%" innerRadius="40%" outerRadius="90%" barSize={33} data={data}>
            <RadialBar background dataKey="count" />
          </RadialBarChart>
        </ResponsiveContainer>
        {/* Centered Image */}
        {/* Uncomment if needed */}
        {/* <Image 
          src="/maleFemale.png" 
          alt='' 
          width={50} 
          height={50} 
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        /> */}
      </div>
      {/* BOTTOM */}
      <div className='flex justify-center gap-2 mt-4'> {/* Added margin-top */}
        <div className='flex gap-4'>
          <div className='flex items-center gap-2'>
            <div className='w-5 h-5 bg-blue-300 rounded-full'></div>
            <div>
              <h1 className='font-bold'>50</h1>
              <h2 className='text-xs text-gray-500'>Men (25%)</h2>
            </div>
          </div>
          <div className='flex items-center gap-2'>
            <div className='w-5 h-5 bg-pink-300 rounded-full'></div>
            <div>
              <h1 className='font-bold'>100</h1>
              <h2 className='text-xs text-gray-500'>Women (75%)</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountChart;
