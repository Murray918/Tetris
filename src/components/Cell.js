import React from 'react'
import PropTypes from 'prop-types'
import { StyledCell } from './styles/StyledCell'
import { TETROMINOS } from '../tetrominos'

const Cell = ({ type }) => (
	<StyledCell type={type} color={TETROMINOS[type].color} />
)

export default Cell

Cell.propTypes = {
	type: PropTypes.object
}
