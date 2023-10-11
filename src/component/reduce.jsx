import React from 'react'
const num=[1,2,3,4,5,5]

function Reduce() {
  return (
      <div>
          <h4>sum is :</h4>
          {num.reduce((acc, current)=>{
              return acc+current},0
          )}
          
     
    </div>
  )
}

export default Reduce
