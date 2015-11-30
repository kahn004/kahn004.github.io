import React from 'react'
import { Link } from 'react-router'

class Calendar extends React.Component {

	render() {
		return (
			<div>
				<h2>Calendar</h2>
				<p>This is Calendar page.</p>
				<Link to="/">Back to home</Link>
			</div>
		)
	}
}

module.exports = Calendar