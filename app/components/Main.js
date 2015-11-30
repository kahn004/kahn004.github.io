import React from 'react'
import { Link } from 'react-router'

class Main extends React.Component {
	
	render () {
		return (
			<div className="row">
				<h1>Main</h1>
				<p>This is the main page :-)</p>
				<Link to="/calendar">Calendar</Link>{' '}
				{ this.props.children }
			</div>
		)
	}
}

module.exports = Main