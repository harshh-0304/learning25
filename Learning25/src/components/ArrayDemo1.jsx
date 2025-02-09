import React from 'react'

const ArrayDemo1 = () => {

    var arr = ["harsh" , "mann" , "divy" , "vivek"]
  return (
    
    <div>
        {
            arr.map((name)=>{
                return <li>{name}</li>
            })
        }
      
    </div>
  )
}

export default ArrayDemo1
