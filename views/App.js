import React, { Component } from 'react'
import Radium, { Style, StyleRoot } from 'radium'
import Header from '../components/Header'

function ConfiguredRadium(component) {
	return Radium({
		plugins: [
			Radium.Plugins.resolveMediaQueries
		]
	})(component)
}

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
			<StyleRoot>
				<div style={[styles.container, styles.containerFixed]}>
					<Style rules={{
						body: {
							fontFamily: 'Arial, Helvetica, sans-serif'
						},
						html: {
							background: '#eee',
							fontSize: '100%',
							transition: 'font-size .5s ease-in-out'
						},
						'h1, h2, h3': {
							fontFamily: 'sans-serif'
						},
						ul: {
							margin: 0,
						    padding: 0,
						    listStyle: 'none'
						},
						'ul li': {
					    	display: 'block',
					    	margin: '10px 20px 0 0'
					    },
					    mediaQueries: {
							'(min-width: 550px)': {
								html: {
									fontSize: '120%'
								},
								'ul li': {
							    	display: 'inline-block'
							    }
							},
							'(min-width: 1200px)': {
								html: {
									fontSize: '140%'
								}
							}
						}
					}} />
					<Header />
					{ this.props.children }
				</div>
			</StyleRoot>
		)
	}
}

export default Radium(App)