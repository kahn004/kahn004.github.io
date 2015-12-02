import React from 'react'
import { Link } from 'react-router'

class BuyADip extends React.Component {

	constructor (props) {
		super(props)

		this.updatePhase = this.updatePhase.bind(this)

		this.state = {
			phase: 1
		}
	}

	updatePhase () {
		this.setState({
			phase: this.state.phase++
		})
		console.log('update phase', this.state.phase);
	}

	render () {
		return (
			<div>
				<h5>Buy a dip</h5>
				<p>
					A dip is a random selection of numbers. The dip types give you options to play the different games: Lotto, Powerball and Strike. You can now play on Wednesdays and Saturdays.
				</p>
				<blockquote>Screen #1</blockquote>
				<button className="button" onClick={this.updatePhase}>Buy now</button>
			</div>
		)
	}
}

module.exports = BuyADip
