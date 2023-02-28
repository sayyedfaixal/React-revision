import React from 'react'
import { FirstName } from './CompA'
import { LastName} from './CompB'
const CompC = () => {
  return (
    <div>
        <h4>Using the value of Component A direclty in component C without Prop drilling via ContextAPI</h4>
    <FirstName.Consumer>
        {
            (fName) =>{
                return (
                   <LastName.Consumer>
                        {
                            (lName) =>{
                                return (
                                    <h3>
                                        Hello {fName} {lName}
                                    </h3>
                                )
                            }
                        }
                   </LastName.Consumer>
                )
            }
        }
    </FirstName.Consumer>
    </div>
  )
}

export default CompC