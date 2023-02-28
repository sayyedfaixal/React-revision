import React, {useState} from 'react'

const WorkingWithuseState = () => {
  const [title, setTitle] = useState("Hi there");
  const [bool, setBool] = useState(0);
  function handleClick() {
        if(bool){
            setTitle("Hello there");
            setBool(0);
            console.log(bool);
        }
        else{
            setTitle("Hi there");
            setBool(1);
            console.log(bool);
        }
  }
  return (
    <div>
        <h4 >{title} and Boolean is {bool}</h4>
        <button  onClick={() => handleClick()}>Click Me</button>
    </div>
  )
}

export default WorkingWithuseState