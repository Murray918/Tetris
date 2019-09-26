import React from 'react'
import Stage from './Stage'
import { StartButton, Display } from '../components'
import { createStage } from '../gameHelpers'
import {
	StyledTetrisWrapper,
	StyledTetris
} from '../components/styles/StyledTetris'

const Tetris = () => {
	console.log(createStage())
	return (
		<StyledTetrisWrapper>
			<StyledTetris>
				<Stage stage={createStage()} />
				<div>
					<aside>
						<div>
							<Display text="Score" />
							<Display text="Rows" />
							<Display text="Level1" />
						</div>
						<StartButton />
					</aside>
				</div>
			</StyledTetris>
		</StyledTetrisWrapper>
	)
}

export default Tetris
