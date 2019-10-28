import React, { useState } from 'react'
import { createStage } from '../gameHelpers'
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
	console.log('re-render')

	const movePlayer = dir => {
		updatePlayerPos({x: dir, y:0})
	}

	const startGame = () => {
		setStage(createStage())
		resetPlayer()
	}

	const drop = () => {
		updatePlayerPos({x: 0, y: 1, collided : false})
	}

	const dropPlayer = () => {
		drop()
	}

	const move = ({ keyCode }) => {
		if(!gameOver) {
			switch (keyCode) {
				case 37:
					movePlayer(-1)
					break;
				case 39:
					movePlayer(1)
					break;
				case 40:
					dropPlayer()
				default:
					break;
			}
		}
	}

	return (
		<StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} >
			<StyledTetris>
				<Stage stage={stage} />
				<div>
					<aside>
						{gameOver ? (
							<Display gameOver={gameOver} text={'Game Over'} />
						) : (
							<div>
								<Display text="Score" />
								<Display text="Rows" />
								<Display text="Level1" />
							</div>
						)}
						<StartButton onClick={startGame} />
					</aside>
				</div>
			</StyledTetris>
		</StyledTetrisWrapper>
	)
}

export default Tetris
