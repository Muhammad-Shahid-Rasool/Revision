import React, { useState } from 'react'

const Revision = () => {
      const  [nam,setNam]=useState("");
       const [age,setAge]=useState("");
  return (
   <> <h1>Allah o Akbar</h1>
    <form action="">
    <label htmlFor="Name">Name</label>
    <input type="text" value={nam} onChange={(e)=>setNam(e.target.value)} />
    <button type="submit">done</button>
     <br />
    <label htmlFor="Age">Age</label>
    <input type="text" value={age} onChange={(e)=>setAge(e.target.value)} />
    <button type="submit">Done</button>
    </form></>
  )
}

export default Revision