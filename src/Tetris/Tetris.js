import React from 'react'
import Stage from './Stage'
import { useStage } from '../CustomHooks'
import { StartButton, Display } from '../components'
import {
	StyledTetrisWrapper,
	StyledTetris
} from '../components/styles/StyledTetris'

const Tetris = () => {
	// use our hook
	const [stage, setStage ] = useStage()
	console.log(stage)
 	return (
		<StyledTetrisWrapper>
			<StyledTetris>
				<Stage stage={createStage(stage)} />
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
