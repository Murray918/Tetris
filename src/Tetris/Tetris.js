import React, { useState } from 'react'

//Utils
import { createStage, checkCollision } from '../gameHelpers'

//Custom Hooks
import { useStage } from '../CustomHooks/useStage'
import { usePlayer } from '../CustomHooks/usePlayer'
import { useInterval } from '../CustomHooks/useInterval'
import { useGameStatus } from '../CustomHooks/useGameStatus'

//Components
import { StartButton, Display } from '../components'
import Stage from './Stage'

//Styled Components
import {
	StyledTetrisWrapper,
	StyledTetris
} from '../components/styles/StyledTetris'

const Tetris = () => {
	// set up our state
	const [dropTime, setDropTime] = useState()
	const [gameOver, setGameOver] = useState()

	// use our hooks
	const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer()
	const [stage, setStage, rowsCleared] = useStage(player, resetPlayer)
	const [score, setScore, rows, setRows, level, setLevel] = useGameStatus(
		rowsCleared
	)

	// cheat
	console.log('re-render')

	const movePlayer = dir => {
		if (!checkCollision(player, stage, { x: dir, y: 0 })) {
			updatePlayerPos({ x: dir, y: 0 })
		}
	}

	const startGame = () => {
		// Reset everything
		setStage(createStage())
		setDropTime(1000)
		resetPlayer()
		setScore(0)
		setLevel(0)
		setRows(0)
		setGameOver(false)
	}

	const drop = () => {
		// Increase level when player has cleared 10 rows
		if (rows > (level + 1) * 10) {
			setLevel(prev => prev + 1)
			// Also increase speed
			setDropTime(1000 / (level + 1) + 200)
		}

		if (!checkCollision(player, stage, { x: 0, y: 1 })) {
			updatePlayerPos({ x: 0, y: 1, collided: false })
		} else {
			// Game over!
			if (player.pos.y < 1) {
				console.log('GAME OVER!!!')
				setGameOver(true)
				setDropTime(null)
			}
			updatePlayerPos({ x: 0, y: 0, collided: true })
		}
	}

	const keyUp = ({ keyCode }) => {
		if (!gameOver) {
			// Activate the interval again when user releases down arrow.
			if (keyCode === 40) {
				setDropTime(1000 / (level + 1))
			}
		}
	}

	const dropPlayer = () => {
		setDropTime(null)
		drop()
	}

	const move = ({ keyCode }) => {
		if (!gameOver) {
			if (keyCode === 37) {
				movePlayer(-1)
			} else if (keyCode === 39) {
				movePlayer(1)
			} else if (keyCode === 40) {
				dropPlayer()
			} else if (keyCode === 38) {
				playerRotate(stage, 1)
			}
		}
	}

	useInterval(() => {
		drop()
	}, dropTime)

	return (
		<StyledTetrisWrapper
			role="button"
			tabIndex="0"
			onKeyDown={e => move(e)}
			onKeyUp={keyUp}
		>
			<StyledTetris>
				<Stage stage={stage} />
				<div>
					<aside>
						{gameOver ? (
							<Display gameOver={gameOver} text={'Game Over'} />
						) : (
							<div>
								<Display text={`Score : ${score}`} />
								<Display text={`Rows: ${rows}`} />
								<Display text={`Level : ${level}`} />
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
