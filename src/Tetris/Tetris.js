import React from 'react'
import Stage from './Stage'
import { StartButton, Display } from '../components'
export default () => {
	return (
		<div>
			<Stage />
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
