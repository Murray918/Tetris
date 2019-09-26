import React from 'react'
import { StyledStartButton } from './styles/StyledStartButton'
import PropTypes from 'prop-types'

const StartButton = ({ callback }) => {
	return <StyledStartButton onClick={callback}>Start</StyledStartButton>
}

export default StartButton

StartButton.propTypes = {
	callback : PropTypes.func
}