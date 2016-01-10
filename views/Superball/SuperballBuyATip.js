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
		this.setState({
			tipSelected: true,
			selectedTip: e.target.dataset.tip,
			selectedTipPrice: this.toDecimal(e.target.value),
			totalGhettoLines: e.target.dataset.ghetto,
			totalSuperballLines: e.target.dataset.superball,
			totalHitLines: e.target.dataset.hit,
		})
	}
	toDecimal (n) {
		return parseFloat(n).toFixed(2)
	}
	renderTips () {
		return (
			<div>
				<h3>Buy a tip</h3>
				<p>A tip is a random selection of numbers. The tip types give you options to play the different games: Ghetto, Superball and Hit. <Link to="/ghetto-changes">You can now play on Wednesdays and Saturdays</Link>.</p>
				<div>
					<Tip
						tipType={this.state.luckyTip}
						activeTip={this.state.selectedTip}
						onChange={this.handleChange} />
					<Tip
						tipType={this.state.powerTip}
						activeTip={this.state.selectedTip}
						onChange={this.handleChange} />
					<Tip
						tipType={this.state.trippleTip}
						activeTip={this.state.selectedTip}
						onChange={this.handleChange} />
				</div>
				<div>
					<h4>Your ticket details</h4>
					<p>
						{ this.state.tipSelected ?
							<span>
								{ this.state.selectedTip }
								{ ' ' }
								${ this.state.selectedTipPrice }
							</span> :
							null
						}
					</p>
					<p>
						<strong>TOTAL: ${this.state.selectedTipPrice}</strong>
					</p>
					<button onClick={this.updateStatus} disabled={!this.state.selectedTipPrice}>Buy now</button>
				</div>
			</div>
		)
	}
	renderResult () {
		const { substract } = this.props
		return (
			<div>
				<h3>Result</h3>
				<button onClick={this.updateStatus}>Click here to change your tip selection</button>
				<button onClick={() => substract(this.state.selectedTipPrice)}>Confirm purchase</button>
			</div>
		)
	}
}

export default connect(
	null,
	{ substract }
)(SuperballBuyATip)