import React, { useContext } from 'react'
import { FirstName, MiddleName, LastName  } from './Comp1'
const Comp3 = () => {
  const fName = useContext(FirstName);
  const mName = useContext(MiddleName);
  const lName = useContext(LastName);
  return (
    <div>
      <h2>useContext</h2>
      <h4>Getting the values from Parent Comp1 inside Comp3 via  - {fName} {mName} {lName}</h4>
    </div>
  )
}

export default Comp3