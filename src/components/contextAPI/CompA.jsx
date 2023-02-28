import React, { createContext } from 'react'
import CompB from "./CompB"
const FirstName = createContext();
const CompA = () => {
  return (
    <div>
        <FirstName.Provider value = {"Faisal"}>
            <CompB />
        </FirstName.Provider>
    </div>
  )
}
export default CompA
export {FirstName}