import { useState } from 'react'

import { randomTetromino } from '../tetrominos'

export const usePlayer = () => {
	const [player, usePlayer] = useState({
		pos: { x: 0, y: 0 },
		tetromino: randomTetromino(),
		collided: false
	})

	return [player]
}
