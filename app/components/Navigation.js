import React from 'react'
import { Link } from 'react-router'

class Navigation extends React.Component {
	
	render () {
		return (
			<ul className="menu">
				<li><Link to="/powerball">Powerball</Link></li>
				<li><Link to="/big">Big</Link></li>
				<li><Link to="/keno">Keno</Link></li>
				<li><Link to="/bullseye">Bullseye</Link></li>
				<li><Link to="/playthree">Play 3</Link></li>
				<li><Link to="/instantkiwi">InstantKiwi</Link></li>
				<li><Link to="/secondchance">2ndChance</Link></li>
			</ul>
		)
	}
}

module.exports = Navigation