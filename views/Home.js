import React, { Component } from 'react'
import { Link } from 'react-router'

class Home extends Component {
	render () {
		return (
			<div className="aux">
				<hr />
				<h2>Superball Imagine</h2>
				<h3>This Saturday $6 million</h3>
				<Link to="/ghetto/buy-a-tip">Play now</Link>
			</div>
		)
	}
}

export default Home