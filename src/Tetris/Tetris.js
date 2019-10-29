import React, { useState } from 'react'
import { createStage, checkCollision } from '../gameHelpers'
import Stage from './Stage'
import { useStage } from '../CustomHooks/useStage'

import { StartButton, Display } from '../components'
import {
	StyledTetrisWrapper,
	StyledTetris
} from '../components/styles/StyledTetris'
import { usePlayer } from '../CustomHooks/usePlayer'
import { platform } from 'os'

const Tetris = () => {
	// set up our state
	const [dropTime, setDropTime] = useState()
	const [gameOver, setGameOver] = useState()

	// use our hooks
	const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer()
	const [stage, setStage] = useStage(player, resetPlayer)

	// cheat
	console.log('re-render')

	const movePlayer = dir => {
		if (!checkCollision(player, stage, { x: dir, y: 0 })) {
			updatePlayerPos({ x: dir, y: 0 })
		}
	}

	const startGame = () => {
		setStage(createStage())
		resetPlayer()
		setGameOver(false)
	}

	const drop = () => {
		if (!checkCollision(player, stage, { x: 0, y: 1 })) {
			updatePlayerPos({ x: 0, y: 1, collided: false })
		} else {
			// Game Over
			if (player.pos.y < 1) {
				console.log('GAME OVER')
				setGameOver(true)
				setDropTime(null)
			}
			updatePlayerPos({ x: 0, y: 0, collided: true })
		}
	}

	const dropPlayer = () => {
		drop()
	}

	const move = ({ keyCode }) => {
		console.log(keyCode)
		if (!gameOver) {
			switch (keyCode) {
				case 37:
					movePlayer(-1)
					break
				case 39:
					movePlayer(1)
					break
				case 40:
					dropPlayer()
				case 38:
					playerRotate(stage, 1)
				default:
					console.log('not a a handled gey')
					break
			}
		}
	}

	return (
		<StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
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
						<StartButton callback={startGame} />
					</aside>
				</div>
			</StyledTetris>
		</StyledTetrisWrapper>
	)
}

export default Tetris
