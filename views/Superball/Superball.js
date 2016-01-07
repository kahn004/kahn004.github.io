import React, { Component } from 'react'
import { Link } from 'react-router'

class Superball extends Component {
	render () {
		return (
			<div>
				<hr />
				<h4>Ghetto Superball</h4>
				<ul>
					<li><Link to="/ghetto/buy-a-tip">Buy a tip</Link></li>
					<li><Link to="/ghetto/bookmarks">Bookmarks</Link></li>
					<li><Link to="/ghetto/select-your-own">Select your own</Link></li>
				</ul>
				{ this.props.children }
			</div>
		)
	}
}

export default Superball