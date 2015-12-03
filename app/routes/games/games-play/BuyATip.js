import React from 'react'
import { Link } from 'react-router'

class BuyATip extends React.Component {

	constructor (props) {
		super(props)

		this.updateStatus = this.updateStatus.bind(this)
		this.renderGame = this.renderGame.bind(this)
		this.renderResult = this.renderResult.bind(this)

		this.state = {
			gameMode: true
		}
	}

	render () {
		return (
			<div>
				{ this.state.gameMode ? this.renderGame() : this.renderResult() }
			</div>
		)
	}

	updateStatus () {
		this.setState({
			gameMode: !(this.state.gameMode)
		})
	}

	renderGame () {

		return (
			<div>
				<h5>Buy a tip</h5>
				<p>
					A tip is a random selection of numbers. The tip types give you options to play the different games: Ghetto, Superball and Shtrike. You can now play on Wednesdays and Saturdays.
				</p>
				<button className="button" onClick={this.updateStatus}>Buy now</button>
			</div>
		)
	}

	renderResult () {

		return (
			<div>
				<h5>Result</h5>
				<button className="button" onClick={this.updateStatus}>Back</button>
			</div>
		)
	}
}

export default BuyATip
