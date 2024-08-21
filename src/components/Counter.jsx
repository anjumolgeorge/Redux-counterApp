import React from 'react';
import {useDispatch, useSelector} from "react-redux"
import  { Increment,Decrement, Incrementby5 } from '../redux/counter/counterAction';


const Counter = () => {
 const count =  useSelector((state) => state.counter.count)
 const count2 = useSelector((state)=> state.counter.count2)
 const dispatch = useDispatch()
  return (
    <div>
      Count : {count}
     
      <button onClick={()=>dispatch(Increment())}>Increment</button>
      <button onClick={()=>dispatch(Decrement())}>Decrement</button>
      count2 : {count2}
      <button onClick={()=>dispatch(Incrementby5(5))}>Incrementby5</button>
    </div>
  );
}

export default Counter;