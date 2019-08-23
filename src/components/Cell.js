import React from 'react'
import PropTypes from 'prop-types'
import { StyledCell } from './Styles/StyledCell'
import { TETROMINOS } from '../tetrominos'

const Cell = ({ type }) => (
	<StyledCell type={type} color={TETROMINOS[type].color}>
		cell
	</StyledCell>
)

export default Cell

Cell.propTypes = {
	type: PropTypes.object
}
