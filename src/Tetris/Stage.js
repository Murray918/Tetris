import React from 'react'
import { Cell } from '../components'
import PropTypes from 'prop-types'
import { StyledStage } from '../components/styles/StyledStage'

const Stage = ({ stage }) => {
	const composedStage = stage.map(row =>
		row.map((cell, x) => <Cell key={x} type={cell[0]} />)
	)

	return (
		<StyledStage width={stage[0].length} height={stage.length}>
			{composedStage}
		</StyledStage>
	)
}

export default Stage

Stage.propTypes = {
	stage: PropTypes.array
}
