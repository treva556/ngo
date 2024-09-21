"use client"


import { useEffect, useState } from 'react';

const Counter = ({ endValue, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = endValue / (duration / 100);

    const interval = setInterval(() => {
      start += increment;
      if (start >= endValue) {
        setCount(endValue);
        clearInterval(interval);
      } else {
        setCount(Math.ceil(start));
      }
    }, 100);

    return () => clearInterval(interval);
  }, [endValue, duration]);

  return <span className=' text-green-800'>{count}</span>;
};

export default Counter;