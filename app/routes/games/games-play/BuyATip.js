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
			totalPrice: 0
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
		e.preventDefault()
		this.setState({
			totalPrice: this.state.totalPrice + 1
		})
		console.log('update total price')
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
						<ul>
							<li><a className="secondary button" onClick={this.tipSelectionHandler} href="#">$4.80 | 8 Ghetto lines</a></li>
							<li><a className="secondary button" onClick={this.tipSelectionHandler} href="#">$6 | 10 Ghetto lines</a></li>
							<li><a className="secondary button" onClick={this.tipSelectionHandler} href="#">$9 | 15 Ghetto lines</a></li>
							<li><a className="secondary button" onClick={this.tipSelectionHandler} href="#">$12 | 20 Ghetto lines</a></li>
						</ul>
					</div>
					<div className="small-12 large-4 columns">
						<h5>Power Tip</h5>
						<h6>Ghetto $1 Million</h6>
						<h6>Superball $13 Million</h6>
						<ul>
							<li><a className="secondary button" onClick={this.tipSelectionHandler} href="#">$9.60 | 8 Ghetto lines, 8 Superball lines</a></li>
							<li><a className="secondary button" onClick={this.tipSelectionHandler} href="#">$6 | 10 Ghetto lines, 10 Superball lines</a></li>
							<li><a className="secondary button" onClick={this.tipSelectionHandler} href="#">$9 | 15 Ghetto lines, 15 Superball lines</a></li>
							<li><a className="secondary button" onClick={this.tipSelectionHandler} href="#">$12 | 20 Ghetto lines, 20 Superball lines</a></li>
						</ul>
					</div>
					<div className="small-12 large-4 columns">
						<h5>Triple Tip</h5>
						<h6>Ghetto $1 Million</h6>
						<h6>Superball $13 Million</h6>
						<h6>Hit $300 Thousand</h6>
						<ul>
							<li><a className="secondary button" onClick={this.tipSelectionHandler} href="#">$14 | 10 Ghetto lines, 10 Superball lines, 2 Hit lines</a></li>
							<li><a className="secondary button" onClick={this.tipSelectionHandler} href="#">$16 | 10 Ghetto lines, 10 Superball lines, 4 Hit lines</a></li>
							<li><a className="secondary button" onClick={this.tipSelectionHandler} href="#">$20 | 15 Ghetto lines, 15 Superball lines, 2 Hit lines</a></li>
							<li><a className="secondary button" onClick={this.tipSelectionHandler} href="#">$26 | 20 Ghetto lines, 20 Superball lines, 2 Hit lines</a></li>
						</ul>
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
