import React from 'react'
import { Link } from 'react-router'

import Navigation from './Navigation'

class Main extends React.Component {
	
	render () {
		return (
			<div>
				<div className="top-bar">
					<div className="top-bar-left">
						<ul className="menu">
							<li className="menu-text"><Link to="/">My Game</Link></li>
						</ul>
					</div>
					<div className="top-bar-right">
						<ul className="menu">
							<li><button className="button" type="button">Sign up</button></li>
							<li><button className="button" type="button">Login</button></li>
						</ul>
					</div>
				</div>
				<Navigation />
			</div>
		)
	}
}

module.exports = Main