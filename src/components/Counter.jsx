import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
    const count = useSelector((state) => state.count)
  return (
    <div>
      count :{count}
      <button>increment</button>
    </div>
  );
}

export default Counter;
