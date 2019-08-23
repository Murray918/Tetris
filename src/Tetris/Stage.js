import React from 'react'
import { Cell } from '../components'
import PropTypes from 'prop-types'

const Stage = ({ stage }) => {
	const composedStage = stage.map(row =>
		row.map((cell, x) => <Cell key={x} type={cell[0]} />)
	)

	return <div>{composedStage}</div>
}

export default Stage

Stage.propTypes = {
	stage: PropTypes
}
