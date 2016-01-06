import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { login, logout } from '../actions/user'
import Navigation from './Navigation'

class Header extends Component {
	render () {
		const { name, loggedIn, wallet, login, logout } = this.props
		return (
			<div>
				<div>
					<Link to="/">Ghetto</Link>
					{ ' ' }
					{ loggedIn ?
						<span>
							<strong>Hi { name }, you have ${ wallet }</strong>
							{ ' ' }
							<button onClick={() => logout(wallet)}>Log out</button>
						</span> :
						<button onClick={() => login()}>Login</button>
					}
				</div>
				<Navigation />
			</div>
		)
	}
}

export default connect(
	state => ({
		name: state.user.name,
		loggedIn: state.user.loggedIn,
		wallet: state.user.wallet
	}),
	{ login, logout }
)(Header)