import React, { Component, PropTypes } from 'react'

class AddLines extends Component {
	constructor (props) {
		super(props)

		this.renderContent = this.renderContent.bind(this)
		this.renderSuperballLines = this.renderSuperballLines.bind(this)
		this.renderHitLines = this.renderHitLines.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.buttonMapper = this.buttonMapper.bind(this)

		this.state = {
			showSuperballLines: false,
			showHitLines: false,
			superballLines: [8, 9, 10, 15, 20],
			superballNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			hitNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
		}
	}
	buttonMapper (arry, task = null) {
		const map = arry.map((item, i) =>
			<button
				key={i}
				onClick={() => {
					if (task !== null) {
						task(item)	
					}	
				}}>
				{ item }
			</button>
		)
		return map
	}
	renderSuperballLines (option = 'change') {
		if (option !== 'change') {
			return (
				<div>
					<h5>1. Choose how many lines you want to play</h5>
					{ this.buttonMapper(this.state.superballLines, this.props.onAddSuperball) }
					<h5>2. Choose one Superball number for all lines</h5>
					{ this.buttonMapper(this.state.superballNums) }
				</div>
			)
		} else {
			return (
				<div>
					<h5>Choose one Superball number for all lines</h5>
					{ this.buttonMapper(this.state.superballNums) }
				</div>
			)
		}
	}
	renderHitLines () {
		return (
			<div>
				<h5>Choose how many lines you want to add</h5>
				{ this.buttonMapper(this.state.hitNums, this.props.onAddHit) }
			</div>
		)
	}
	handleClick (lines) {
		if (lines === 'superball') {
			this.setState({
				showSuperballLines: true,
				showHitLines: false
			})
		} else {
			this.setState({
				showSuperballLines: false,
				showHitLines: true
			})
		}
	}
	renderContent (tip) {
		switch (tip) {
			case 'Lucky Tip':
				return (
					<div>
						<h4>Would you like to add Superball or Hit?</h4>
						<button onClick={() => this.handleClick('superball')}>Superball | Extra $0.60 per line</button>
						{ ' ' }
						<button onClick={() => this.handleClick('hit')}>Hit | Extra $1.00 per line</button>
						{ this.state.showSuperballLines ? this.renderSuperballLines('add') : null }
						{ this.state.showHitLines ? this.renderHitLines() : null }
					</div>
				)
			case 'Power Tip':
				return (
					<div>
						<h4>Would you like to change Superball or add Hit?</h4>
						<button onClick={() => this.handleClick('superball')}>Superball | Change</button>
						{ ' ' }
						<button onClick={() => this.handleClick('hit')}>Hit | Extra $1.00 per line</button>
						{ this.state.showSuperballLines ? this.renderSuperballLines() : null }
						{ this.state.showHitLines ? this.renderHitLines() : null }
					</div>
				)
			case 'Tripple Tip':
				return (
					<div>
						<h4>Would you like to change Superball or Hit?</h4>
						<button onClick={() => this.handleClick('superball')}>Superball | Change</button>
						{ ' ' }
						<button onClick={() => this.handleClick('hit')}>Hit | Change</button>
						{ this.state.showSuperballLines ? this.renderSuperballLines() : null }
						{ this.state.showHitLines ? this.renderHitLines() : null }
					</div>
				)
		}
	}
	render () {
		return (
			<div style={{backgroundColor: '#eee'}}>{ this.renderContent(this.props.tip) }</div>
		)
	}
}

AddLines.propTypes ={
	tip: PropTypes.string.isRequired,
	onAddSuperball: PropTypes.func,
	onAddHit: PropTypes.func.isRequired
}

export default AddLines