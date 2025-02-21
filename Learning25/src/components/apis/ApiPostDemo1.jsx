import React from 'react'
import axios from 'axios'

const ApiPostDemo1 = () => {

    const postData = async()=>{

        var userObj = {
            name:"Ram",
            email:"Ram@gmail.com",
            age:22,
            isActive:true
            
            
        }
        const res = await axios.post("https://node5.onrender.com/user/user",userObj)
        console.log(res)
        console.log(res.data)
        if(res.status ==201){
            alert("user saved...")
        }

        
    }



  return (
    <div style={{textAlign:"centre"}}>
        <h1>post demo 1</h1>
        <button onClick={()=>{postData()}}>Add user</button>
      
    </div>
  )
}

export default ApiPostDemo1
