import React from 'react'
import "./listRendering.css"
const ListRendering = () => {
  const myListArray = [
    {keyId: 1,
    value : "One"},
    {keyId: 2,
    value : "two"},
    {keyId: 3,
    value : "Three"},
    {keyId: 4,
    value : "Four"},
    {keyId: 5,
    value : "Five"}
  ]
  function handleClick(){

  }
  return (
    <div>
      {
        myListArray.map(({keyId, value}) =>{
          return (
              <li key={keyId}>
                {value}
                <button className='btn' onClick={() => handleClick()}>X</button>
              </li>
          )
        })
      }
    </div>
  )
}

export default ListRendering