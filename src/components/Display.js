import React from 'react'
import { StyledDisplay } from './styles/StyledDisplay'
import PropTypes from 'prop-types'

const Display = ({ gameOver, text }) => {
	return <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
}

export default Display

Display.propTypes = {
	gameOver: PropTypes.bool,
	text: PropTypes.string
}
