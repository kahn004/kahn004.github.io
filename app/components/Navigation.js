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
				<li><Link to="/powerball" activeStyle={this.activeLink}>Game1</Link></li>
				<li><Link to="/big" activeStyle={this.activeLink}>Game2</Link></li>
				<li><Link to="/keno" activeStyle={this.activeLink}>Game3</Link></li>
				<li><Link to="/bullseye" activeStyle={this.activeLink}>Game4</Link></li>
				<li><Link to="/playthree" activeStyle={this.activeLink}>Game5</Link></li>
				<li><Link to="/instantkiwi" activeStyle={this.activeLink}>Game6</Link></li>
				<li><Link to="/secondchance" activeStyle={this.activeLink}>Game7</Link></li>
			</ul>
		)
	}
}

module.exports = Navigation