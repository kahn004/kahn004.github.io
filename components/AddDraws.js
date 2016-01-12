import React, { Component, PropTypes } from 'react'

class AddDraws extends Component {
	constructor (props) {
		super(props)

		this.whichDay = this.whichDay.bind(this)

		this.state = {
			drawDays: [
				{
					day: 'Wednesday',
					checked: true
				},
				{
					day: 'Saturday',
					checked: false
				}
			],
			day: 'Wed',
			draws: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			wedDraw: true,
			satDraw: false
		}
	}
	whichDay (e) {
		var radio = e.target
		var value = radio.value

		if (value === 'Wednesday') {
			this.setState({ day: 'Wed' })
			return
		}
		this.setState({ day: 'Sat' })
	}
	render () {
		const drawDaysButtons = this.state.drawDays.map((item, i) =>
			<li key={i}>
				<input
					id={item.day}
					type="radio"
					name="draws"
					value={item.day}
					defaultChecked={item.checked}
					onChange={(e) => this.whichDay(e)} />
				<label htmlFor={item.day}>{ item.day }</label>
			</li>
		)
		const drawFrequecies = this.state.draws.map((item, i) =>
			<button
				className={item === 1 ? 'active' : null}
				key={i}
				onClick={() =>
					this.props.onSelectDraws(item)
				}>{ item } | { this.state.day }</button>
		)
		return (
			<div>
				<p>Choose the draw you want to play or click both to play twice a week <a href="#">Need help?</a></p>
				<ul>{ drawDaysButtons }</ul>
				<p>Want more draws?</p>
				{ drawFrequecies }
				<hr />
			</div>
		)
	}
}

AddDraws.propTypes = {
	onSelectDraws: PropTypes.func.isRequired
}

export default AddDraws