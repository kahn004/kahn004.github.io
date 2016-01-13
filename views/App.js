import React, { Component } from 'react'
import Radium from 'radium'
import Header from '../components/Header'

class App extends Component {
	render () {
		var styles = {
			container: {
				background: '#fff'
			},
			containerFixed: {
				margin: '0 auto',
				maxWidth: 900
			}
		}
		return (
			<div style={[styles.container, styles.containerFixed]}>
				<Header />
				{ this.props.children }
			</div>
		)
	}
}

export default Radium(App)