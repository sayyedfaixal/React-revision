import React from 'react'
import C from "../propDrilling/C"
const B = (props) => {
  return (
    <>
    <C  name = {props.name}/>
    {props.children}
    </>
  )
}

export default B