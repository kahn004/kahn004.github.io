import React from 'react'
import { Link } from 'react-router'

class GhettoChanges extends React.Component {

	render () {
		return (
			<div>
				<h5>Ghetto changes</h5>
				<p>
					Your favourite Ghetto games are creating more winners and more millionaires than ever before with Superball and Hit now played on Wednesday and Saturday.
				</p>
				<Link className="button" to="/ghetto/buy-a-tip">Buy a tip</Link>
				<Link className="button" to="/ghetto/select-your-own">Select your own</Link>
			</div>
		)
	}
}

export default GhettoChanges