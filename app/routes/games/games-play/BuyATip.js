import React from 'react'
import { Link } from 'react-router'

import Tip from './Tip'

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
			tipType: '',
			luckyTip: {
				name: 'Lucky Tip',
				tips: ['4.80', '6', '9', '12'],
				numberOfLines: {
					ghetto: ['8', '10', '15', '20']
				}
			},
			powerTip: {
				name: 'Power Tip',
				tips: ['9.60', '12', '18', '24'],
				numberOfLines: {
					ghetto: ['8', '10', '15', '20'],
					superball: ['8', '10', '15', '20']
				}
			},
			tripleTip: {
				name: 'Triple Tip',
				tips: ['14', '16', '20', '26'],
				numberOfLines: {
					ghetto: ['10', '10', '15', '20'],
					superball: ['10', '10', '15', '20'],
					hit: ['2', '4', '2', '2']
				}
			}
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
		var name = e.target.dataset.tip

		this.setState({
			totalPrice: value,
			tipType: name
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
						<Tip tipType={this.state.luckyTip} onClickTip={this.tipSelectionHandler} />
					</div>
					<div className="small-12 large-4 columns">
						<h5>Power Tip</h5>
						<h6>Ghetto $1 Million</h6>
						<h6>Superball $13 Million</h6>
						<Tip tipType={this.state.powerTip} onClickTip={this.tipSelectionHandler} />
					</div>
					<div className="small-12 large-4 columns">
						<h5>Triple Tip</h5>
						<h6>Ghetto $1 Million</h6>
						<h6>Superball $13 Million</h6>
						<h6>Hit $300 Thousand</h6>
						<Tip tipType={this.state.tripleTip} onClickTip={this.tipSelectionHandler} />
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
				<h5>Check your ticket, choose your draw(s) and then confirm purchase</h5>
				<h6>Your Selection</h6>
				<h6>{ this.state.tipType }, ${ this.state.totalPrice }</h6>
				<button className="button" onClick={this.updateStatus}>Click here to change your dip selection.</button>
			</div>
		)
	}
}

export default BuyATip
