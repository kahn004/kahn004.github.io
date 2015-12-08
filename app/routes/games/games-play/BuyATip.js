import React from 'react'
import { Link } from 'react-router'

class BuyATip extends React.Component {

	constructor (props) {
		super(props)

		this.updateStatus = this.updateStatus.bind(this)
		this.renderGame = this.renderGame.bind(this)
		this.renderResult = this.renderResult.bind(this)
		this.tipSelectionHandler = this.tipSelectionHandler.bind(this)

		this.state = {
			gameMode: true,
			totalPrice: '0',
			luckyTip: ['4.80', '6', '9', '12'],
			powerTip: ['9.60', '12', '18', '24'],
			tripleTip: ['14', '16', '20', '26']
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

	tipSelectionHandler (e) {
		var value = e.target.value
		this.setState({
			totalPrice: value
		})
	}

	renderGame () {

		return (
			<div>
				<h5>Buy a tip</h5>
				<p>
					A tip is a random selection of numbers. The tip types give you options to play the different games: Ghetto, Superball and Hit. <Link to="/ghetto-changes">You can now play on Wednesdays and Saturdays</Link>.
				</p>
				<div className="row">
					<div className="small-12 large-4 columns">
						<h5>Lucky Tip</h5>
						<h6>Ghetto $1 Million</h6>
						{ this.state.luckyTip.map((item, index) => {
							return (
								<div key={index}>
									<label className="button">
										<input
											type="radio"
											name="tips"
											value={item}
											onClick={this.tipSelectionHandler} />
										{ item }
									</label>
								</div>
							)
						}) }
					</div>
					<div className="small-12 large-4 columns">
						<h5>Power Tip</h5>
						<h6>Ghetto $1 Million</h6>
						<h6>Superball $13 Million</h6>
						{ this.state.powerTip.map((item, index) => {
							return (
								<div key={index}>
									<label className="button">
										<input
											type="radio"
											name="tips"
											value={item}
											onClick={this.tipSelectionHandler} />
										{ item }
									</label>
								</div>
							)
						}) }
					</div>
					<div className="small-12 large-4 columns">
						<h5>Triple Tip</h5>
						<h6>Ghetto $1 Million</h6>
						<h6>Superball $13 Million</h6>
						<h6>Hit $300 Thousand</h6>
						{ this.state.tripleTip.map((item, index) => {
							return (
								<div key={index}>
									<label className="button">
										<input
											type="radio"
											name="tips"
											value={item}
											onClick={this.tipSelectionHandler} />
										{ item }
									</label>
								</div>
							)
						}) }
					</div>
				</div>
				<div>
					<h5>Your ticket details</h5>
					<h6>Total ${ this.state.totalPrice }</h6>
					<button className="button" onClick={this.updateStatus}>Buy now</button>
				</div>
			</div>
		)
	}

	renderResult () {

		return (
			<div>
				<h5>Result</h5>
				<h6>${ this.state.totalPrice }</h6>
				<button className="button" onClick={this.updateStatus}>Back</button>
			</div>
		)
	}
}

export default BuyATip
