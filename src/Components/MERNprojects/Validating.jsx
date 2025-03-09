import React from 'react'

const Validating = () => {
  const Validating=()=>{
        console.log("hi ");
        
    }
    return (
    
    <div>
        <form action={<ShowingFormDetails/>} onSubmit={Validating} method="post">
         Username   <input type="text" name="" id="" />
         Password   <input type="password" name="" id="" />
         Email      <input type="email" name="" id="" />
         Phone No.  <input type="number" name="" id="" />
        </form>
    </div>
  )
}

export default Validating