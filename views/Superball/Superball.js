import React, { Component } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

class Superball extends Component {
	render () {
		var styles = {
			test: {
				background: 'blue',
				'@media (min-width: 1200px)': {
					background: 'yellow'
				}
			}
		}
		return (
			<div className="aux">
				<hr />
				<h2>Ghetto Superball</h2>
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

export default Radium(Superball)