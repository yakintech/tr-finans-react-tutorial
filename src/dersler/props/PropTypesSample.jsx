import React from 'react'
import PropTypes from 'prop-types';

function PropTypesSample(props) {
  return (<>
    <h1>{props.companyName}</h1>
  </>
  )
}

PropTypesSample.propTypes = {
    companyName: PropTypes.string
}

export default PropTypesSample