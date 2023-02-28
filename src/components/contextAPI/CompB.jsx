import React, { createContext } from 'react'
import CompC from "./CompC"

const LastName = createContext();
const CompB = () => {
  return (
    <div>
      <LastName.Provider value={"Sayed"}>
        <CompC />
        </LastName.Provider>
    </div>
  )
}
export {LastName}
export default CompB