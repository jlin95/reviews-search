import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const LoadingIndicator = ({ loading }) => {
  return loading ? <div>Loading... </div> : null
}

LoadingIndicator.propTypes = {
  loading: PropTypes.bool.isRequired
}

export default LoadingIndicator
