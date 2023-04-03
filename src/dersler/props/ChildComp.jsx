import React from 'react'

function ChildComp(props) {
  return (<>
    <p>This is Child Component</p>
    <h2>Name: {props.name}</h2>
    <h2>Age: {props.age}</h2>
  </>)
}

export default ChildComp