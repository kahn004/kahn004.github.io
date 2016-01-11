import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { substract } from '../../actions/user'
import Tip from '../../components/Tip'
import superballApi from '../../api/superball'

class SuperballBuyATip extends Component {
	constructor (props) {
		super(props)

		this.updateStatus = this.updateStatus.bind(this)
		this.renderTips = this.renderTips.bind(this)
		this.renderResult = this.renderResult.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.toDecimal = this.toDecimal.bind(this)
		this.handleAddSuperballLines = this.handleAddSuperballLines.bind(this)
		this.handleAddHitLines = this.handleAddHitLines.bind(this)
		this.updateTotalPrice = this.updateTotalPrice.bind(this)

		this.state = superballApi
	}
	render () {
		return (
			<div>{ this.state.gameMode ? this.renderTips() : this.renderResult() }</div>
		)
	}
	updateStatus () {
		this.setState({ gameMode: !(this.state.gameMode) })
	}
	handleChange (e) {
		var value = this.toDecimal(e.target.value)
		this.setState({
			tipSelected: true,
			selectedTip: e.target.dataset.tip,
			selectedTipPrice: value,
			totalGhettoLines: e.target.dataset.ghetto,
			totalSuperballLines: e.target.dataset.superball,
			totalSuperballLinesPrice: 0,
			totalHitLines: e.target.dataset.hit,
			totalHitLinesPrice: 0,
			totalPrice: this.updateTotalPrice(value, 0, 0)
		})
	}
	handleAddSuperballLines (item) {
		var value = this.toDecimal(item * .6)
		this.setState({
			totalSuperballLines: item,
			totalSuperballLinesPrice: value,
			totalPrice: this.updateTotalPrice(this.state.selectedTipPrice, value, this.state.totalHitLinesPrice)
		})
	}
	handleAddHitLines (item) {
		var value = this.toDecimal(item)
		this.setState({
			totalHitLines: item,
			totalHitLinesPrice: value,
			totalPrice: this.updateTotalPrice(this.state.selectedTipPrice, this.state.totalSuperballLinesPrice, value)
		})	
	}
	toDecimal (n) {
		return parseFloat(n).toFixed(2)
	}
	updateTotalPrice (tipPrice, superballPrice, hitPrice) {
		var price1 = parseFloat(tipPrice)
		var price2 = parseFloat(superballPrice)
		var price3 = parseFloat(hitPrice)
		var total = price1 + price2 + price3
		return total.toFixed(2)
	}
	renderTips () {
		const { loggedIn } = this.props
		return (
			<div>
				<h3>Buy a tip</h3>
				<p>A tip is a random selection of numbers. The tip types give you options to play the different games: Ghetto, Superball and Hit. <Link to="/ghetto-changes">You can now play on Wednesdays and Saturdays</Link>.</p>
				<div>
					<Tip
						tipType={this.state.luckyTip}
						activeTip={this.state.selectedTip}
						onChange={this.handleChange}
						onAddSuperballLines={this.handleAddSuperballLines}
						onAddHitLines={this.handleAddHitLines} />
					<Tip
						tipType={this.state.powerTip}
						activeTip={this.state.selectedTip}
						onChange={this.handleChange}
						onAddSuperballLines={this.handleAddSuperballLines}
						onAddHitLines={this.handleAddHitLines} />
					<Tip
						tipType={this.state.trippleTip}
						activeTip={this.state.selectedTip}
						onChange={this.handleChange}
						onAddSuperballLines={this.handleAddSuperballLines}
						onAddHitLines={this.handleAddHitLines} />
				</div>
				<div>
					<h4>Your ticket details</h4>
					{ this.state.tipSelected ?
						<p>
							{ this.state.selectedTip }
							{ ' ' }
							${ this.state.selectedTipPrice }
						</p> :
						null
					}
					{ this.state.totalSuperballLinesPrice > 0 ?
						<p>
							Superball { this.state.totalSuperballLines } Lines
							{ ' ' }
							${ this.state.totalSuperballLinesPrice }
						</p> :
						null
					}
					{ this.state.totalHitLinesPrice > 0 ?
						<p>
							Hit { this.state.totalHitLines } Lines
							{ ' ' }
							${ this.state.totalHitLinesPrice }
						</p> :
						null
					}
					<p>
						<strong>TOTAL: ${this.state.totalPrice}</strong>
					</p>
					<button onClick={() => {
						if (loggedIn) {
							this.updateStatus()	
						} else {
							alert('Please login')
						}
					}} disabled={!this.state.tipSelected}>Buy now</button>
				</div>
			</div>
		)
	}
	renderResult () {
		const { substract } = this.props
		return (
			<div>
				<p>Check your ticket, choose your draw(s) and then confirm purchase</p>
				<div style={{backgroundColor: 'yellow'}}>
					<h3>Your Selection</h3>
					<hr />
					<p>
						{ this.state.selectedTip }
						{ ' ' }
						${ this.state.selectedTipPrice }
					</p>
					<p>{ this.state.totalGhettoLines } Lines Ghetto</p>
					{ this.state.totalSuperballLinesPrice > 0 ?
						<p>{ this.state.totalSuperballLines } Lines Superball</p> : null }
					{ this.state.totalHitLinesPrice > 0 ?
						<p>{ this.state.totalHitLines } Lines Hit</p> : null }
					<hr />
					<button onClick={this.updateStatus}>Click here to change your tip selection</button>
				</div>
				<div>
					<p>Choose the draw you want to play or click both to play twice a week <a href="#">Need help?</a></p>
					<ul>
						<li>
							<input id="draw-wed" type="checkbox" defaultChecked />
							<label htmlFor="draw-wed">Wednesday</label>
						</li>
						<li>
							<input id="draw-sat" type="checkbox" />
							<label htmlFor="draw-sat">Saturday</label>
						</li>
					</ul>
					<p>Want more draws?</p>
					<hr />
					<h3>Summary</h3>
					<p>
						{ this.state.selectedTip }
						{ ' ' }
						${ this.state.selectedTipPrice }
					</p>
					{ this.state.totalSuperballLinesPrice > 0 ?
						<p>
							Superball { this.state.totalSuperballLines } Lines
							{ ' ' }
							${ this.state.totalSuperballLinesPrice }
						</p> :
						null
					}
					{ this.state.totalHitLinesPrice > 0 ?
						<p>
							Hit { this.state.totalHitLines } Lines
							{ ' ' }
							${ this.state.totalHitLinesPrice }
						</p> :
						null
					}
					<p>
						Number of draws 1
					</p>
					<p>
						<strong>TOTAL: ${this.state.totalPrice}</strong>
					</p>
					<button onClick={() => substract(this.state.totalPrice)}>Confirm purchase</button>
				</div>
			</div>
		)
	}
}

export default connect(
	state => ({ loggedIn: state.user.loggedIn }),
	{ substract }
)(SuperballBuyATip)