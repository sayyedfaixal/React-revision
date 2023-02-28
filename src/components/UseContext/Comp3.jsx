import React, { useContext } from 'react'
import { FirstName, MiddleName, LastName  } from './Comp1'
const Comp3 = () => {
  const fName = useContext(FirstName);
  const mName = useContext(MiddleName);
  const lName = useContext(LastName);
  return (
    <div>
      <h4>Getting the values from Parent Comp1 inside Comp3 - {fName} {mName} {lName}</h4>
    </div>
  )
}

export default Comp3