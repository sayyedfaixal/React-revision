import React from 'react'
import B from "../propDrilling/B"
const A = (props) => {
  return (
    <>
    <B name = {props.name}>
      {props.children}
      <hr />
      Hey there I am a child of Component B
    </B>
    </>
  )
}

export default A