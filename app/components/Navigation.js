import React from 'react'
import { Link } from 'react-router'

class Navigation extends React.Component {

	constructor (props) {
		super(props)

		this.activeLink = { color: 'red' }
	}
	
	render () {
		return (
			<ul className="menu">
				<li><Link to="/ghetto" activeStyle={this.activeLink}>Ghetto Superball</Link></li>
				<li><Link to="/huge" activeStyle={this.activeLink}>Huge Wednesday</Link></li>
				<li><Link to="/gini" activeStyle={this.activeLink}>Gini</Link></li>
				<li><Link to="/goldeneye" activeStyle={this.activeLink}>Goldeneye</Link></li>
				<li><Link to="/numbers" activeStyle={this.activeLink}>Numbers</Link></li>
				<li><Link to="/instant-noodle" activeStyle={this.activeLink}>Instant noodle</Link></li>
				<li><Link to="/second-marriage" activeStyle={this.activeLink}>Second marriage</Link></li>
			</ul>
		)
	}
}

module.exports = Navigation