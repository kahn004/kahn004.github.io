import React from 'react'
import { Link } from 'react-router'

class Superball extends React.Component {
	
	render () {
		return (
			<div>
				<h6>Ghetto Superball</h6>
				<ul className="menu">
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