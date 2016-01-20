import styles from './Superball.css'
// import styles from '../App.css'
import CSSModules from 'react-css-modules'

import React, { Component } from 'react'
import { Link } from 'react-router'

class Superball extends Component {
	render () {
		return (
			<div className="bg" styleName="bg">
				<hr />
				<h2 styleName="text text-a">Ghetto Superball</h2>
				<ul>
					<li><Link className="lol" to="/ghetto/buy-a-tip">Buy a tip</Link></li>
					<li><Link to="/ghetto/bookmarks">Bookmarks</Link></li>
					<li><Link to="/ghetto/select-your-own">Select your own</Link></li>
				</ul>
				{ this.props.children }
			</div>
		)
	}
}

export default CSSModules(Superball, styles, { allowMultiple: true })