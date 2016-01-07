import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { substract } from '../../actions/user'

class SuperballBuyATip extends Component {
	constructor (props) {
		super(props)

		this.updateStatus = this.updateStatus.bind(this)
		this.renderTips = this.renderTips.bind(this)
		this.renderResult = this.renderResult.bind(this)
		this.handleChange = this.handleChange.bind(this)

		this.state = {
			gameMode: true,
			selectedTip: '',
		}
	}
	render () {
		return (
			<div>
				{ this.state.gameMode ? this.renderTips() : this.renderResult() }
			</div>
		)
	}
	updateStatus () {
		this.setState({
			gameMode: !(this.state.gameMode)
		})
	}
	handleChange (e) {
		e.target.checked = true
		this.setState({
			selectedTip: parseFloat(e.target.value).toFixed(2)
		})
	}
	renderTips () {
		return (
			<div>
				<h3>Buy a tip</h3>
				<p>
					A tip is a random selection of numbers. The tip types give you options to play the different games: Ghetto, Superball and Hit. <Link to="/ghetto-changes">You can now play on Wednesdays and Saturdays</Link>.
				</p>
				<div>
					<div>
						<h4>Lucky Tip</h4>
						<div>Ghetto | $1 million</div>
						<ul>
							<li>
								<input
									id="lucky-0"
									type="radio"
									name="tips"
									value="4.8"
									onChange={this.handleChange} />
								<label htmlFor="lucky-0">$4.80</label>
							</li>
						</ul>
					</div>
					<div>Power</div>
					<div>Tripple</div>
				</div>
				<div>
					<h4>Your ticket details</h4>
					<p>
					...
					</p>
					<p>
						<strong>TOTAL: { this.state.selectedTip ? `$${this.state.selectedTip}` : '$0.00' }</strong>
					</p>
					<button onClick={this.updateStatus} disabled={!this.state.selectedTip}>Buy now</button>
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
				<button onClick={() => substract(this.state.selectedTip)}>Confirm purchase</button>
			</div>
		)
	}
}

export default connect(
	null,
	{ substract }
)(SuperballBuyATip)