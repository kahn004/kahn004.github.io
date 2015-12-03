import React from 'react'
import { Link } from 'react-router'

class Powerball extends React.Component {
	
	render () {
		return (
			<div>
				<blockquote>Powerball</blockquote>
				<ul className="menu">
		          <li><Link to="/powerball/buy-a-dip">Buy a dip</Link></li>
		          <li><Link to="/powerball/favourites">Favourites</Link></li>
		          <li><Link to="/powerball/pick-your-own">Pick your own</Link></li>
		        </ul>
				{ this.props.children }
			</div>
		)
	}
}

export default Powerball