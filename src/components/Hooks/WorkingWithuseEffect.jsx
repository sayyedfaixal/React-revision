import React, { useEffect, useState } from 'react'

const WorkingWithuseEffect = () => {
    const [resource, setResource ] = useState('posts');
    const [data , setData ] = useState([]);
    useEffect( () => {
      fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then(response => response.json())
      .then(json => setData(json))}
    , [resource])
  return (
    <>
        <div>
            <button onClick={() => setResource("posts")}>Posts</button>
            <button onClick={() => setResource("users")}>Users</button>
            <button onClick={() => setResource("comments")}>Comments</button>
        </div>
        <h3>{resource}</h3>
        {data.map(eachData =>{
            return(
                <ul>
                    <li key={eachData.id}>{JSON.stringify(eachData)}</li >
                </ul>
            )
        })}
    </>
  )
}

export default WorkingWithuseEffect