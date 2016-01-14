import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Radium from 'radium'
import classnames from 'classnames'
import { login, logout } from '../actions/user'
import Navigation from './Navigation'

class Header extends Component {
	render () {
		const { name, loggedIn, wallet, login, logout } = this.props
		const classes = classnames('header', {
			'header-loggedin': loggedIn
		})
		const styles = {
			branding: {
				position: 'relative'
			},
			brandingTitle: {
				color: '#fff'
			}
		}
		return (
			<div className={classes}>
				<div>
					<h1><Link to="/">Ghetto</Link></h1>
					{ ' ' }
					{ loggedIn ?
						<span>
							<strong>Hi { name }, you have ${ wallet }</strong>
							{ ' ' }
							<button onClick={() => logout()}>Log out</button>
						</span> :
						<button onClick={() => login()}>Login</button>
					}
				</div>
				<hr />
				<Navigation />
			</div>
		)
	}
}

export default Radium(Header)

export default connect(
	state => ({
		name: state.user.name,
		loggedIn: state.user.loggedIn,
		wallet: state.user.wallet
	}),
	{ login, logout }
)(Header)