import React, { useState } from 'react'
import Stage from './Stage'
import { useStage } from '../CustomHooks/useStage'

import { StartButton, Display } from '../components'
import {
	StyledTetrisWrapper,
	StyledTetris
} from '../components/styles/StyledTetris'
import { usePlayer } from '../CustomHooks/usePlayer'

const Tetris = () => {
	// set up our state
	const [dropTime, setDropTime] = useState()
	const [gameOver, setGameOver] = useState()

	// use our hooks
	const [player] = usePlayer()
	const [stage, setStage] = useStage()

	// cheat
	console.log(stage)

	return (
		<StyledTetrisWrapper>
			<StyledTetris>
				<Stage stage={stage} />
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
