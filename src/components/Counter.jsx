import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import Increment from '../redux/counter/counterAction';


const Counter = () => {
 const count =  useSelector((state) => state.count)
 const dispatch = useDispatch()
  return (
    <div>
      Count : {count}
      <button onClick={()=>dispatch(Increment())}>Increment</button>
    </div>
  );
}

export default Counter;
