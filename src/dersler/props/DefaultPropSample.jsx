import React from 'react'

function DefaultPropSample(props) {
    return (<>
        <h1>{props.title}</h1>
    </>)
}


DefaultPropSample.defaultProps = {
    title: 'Hello REACT!'
}

export default DefaultPropSample