import React from 'react'
const C = (props) => {
  return (
    <>
    <h1>Hello  { props.name }</h1>
    {props.children}
    </>
  )
}

export default C