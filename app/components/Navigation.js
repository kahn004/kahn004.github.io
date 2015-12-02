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
				<li><Link to="/powerball" activeStyle={this.activeLink}>Powerball</Link></li>
				<li><Link to="/big" activeStyle={this.activeLink}>Big</Link></li>
				<li><Link to="/keno" activeStyle={this.activeLink}>Keno</Link></li>
				<li><Link to="/bullseye" activeStyle={this.activeLink}>Bullseye</Link></li>
				<li><Link to="/playthree" activeStyle={this.activeLink}>Play 3</Link></li>
				<li><Link to="/instantkiwi" activeStyle={this.activeLink}>InstantKiwi</Link></li>
				<li><Link to="/secondchance" activeStyle={this.activeLink}>2ndChance</Link></li>
			</ul>
		)
	}
}

module.exports = Navigation