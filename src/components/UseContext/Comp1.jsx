import React, {createContext} from 'react'
import Comp2 from './Comp2'

const FirstName = createContext();
const LastName = createContext();
const MiddleName = createContext();
const Comp1 = () => {
  return (
    <div>
      <FirstName.Provider value={"Mohammad Faisal"}>
        <LastName.Provider value={"Sayed"}>
            <MiddleName.Provider value={"Aagaz Ali"}>
              <Comp2 />
            </MiddleName.Provider>
      </LastName.Provider>
      </FirstName.Provider>
    </div>
  )
}
export {FirstName, LastName, MiddleName}
export default Comp1