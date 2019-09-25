import React from 'react'
import PropTypes from 'prop-types'
import { StyledCell } from './styles/StyledCell'
import { TETROMINOS } from '../tetrominos'

const Cell = ({ type }) => (
	<StyledCell type={'L'} color={TETROMINOS['L'].color}>
		cell
	</StyledCell>
)

export default Cell

Cell.propTypes = {
	type: PropTypes.object
}
