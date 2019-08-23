import React from 'react'
import Stage from './Stage'
import { StartButton, Display } from '../components'
import { createStage } from '../gameHelpers'

const Tetris = () => {
	return (
		<div>
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
		</div>
	)
}

export default Tetris
