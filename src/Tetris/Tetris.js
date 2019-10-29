import React, { useState } from 'react'

//Utils
import { createStage, checkCollision } from '../gameHelpers'

//Custom Hooks
import { useStage } from '../CustomHooks/useStage'
import { usePlayer } from '../CustomHooks/usePlayer'
import { useInterval } from '../CustomHooks/useInterval'

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
