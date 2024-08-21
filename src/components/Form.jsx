import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import SubmitForm from '../redux/form/formAction';

const Form = () => {
    const [name,setName] = useState("")
    const [age,setAge] = useState(0)
 const dispatch = useDispatch()

  return (
    <div style={{
        display:"flex",
        flexDirection:"column",
        width:"100%",
        alignItems:"center",
        margin:"24px"
    }}
    >

        <input 
        style={{width:"200px"}}
        value={name}
        onChange={(e) => setName(e.target.value)}
        type='text'
        placeholder='enter name'
        />

        <input
        value={age}
        onChange={(e) =>setAge (e.target.value)}
        style={{width:"200px"}}
        type='text'
        placeholder='enter age'
        />

        <button onClick = {()=>dispatch(SubmitForm({name,age}))} style={{margin:"24px"}}>Submit</button>
      
    </div>
  );
}

export default Form;
