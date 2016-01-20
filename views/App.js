import styles from './App.css'
import CSSModules from 'react-css-modules'

import React, { Component } from 'react'
import Header from '../components/Header'

class App extends Component {
	render () {
		return (
			<div styleName="bg">
				<Header />
				{ this.props.children }
			</div>
		)
	}
}

export default CSSModules(App, styles)