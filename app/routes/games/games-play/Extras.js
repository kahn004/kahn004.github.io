import React from 'react'

class Extras extends React.Component {

	constructor (props) {
		super(props)

		this.state = {
			superballLines: [8, 9, 10, 15, 20],
			superballNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
			hitNums: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
			showSuperballLines: false,
			showHitLines: false
		}

		this.superballLinesInDollar = this.superballLinesInDollar.bind(this)
		this.addHitLines = this.addHitLines.bind(this)
		this.toggleSuperballLines = this.toggleSuperballLines.bind(this)
		this.toggleHitLines = this.toggleHitLines.bind(this)
	}

	render () {
		return (
			<div>
				{ this.extraModal(this.props.tip) }
			</div>
		)
	}

	superballLinesInDollar (e) {
		var lineType = e.target.dataset.type
		var lines = e.target.innerHTML
		var price = parseInt(lines) * .6
		var rounded = Math.round( price * 10 ) / 10
		this.props.lolL(lineType, lines, rounded)
	}

	addHitLines (e) {
		var lines = parseInt(e.target.innerHTML)
		this.props.lolL2(lines)
	}

	toggleSuperballLines () {
		this.setState({
			showSuperballLines: !(this.state.showSuperballLines)
		})
	}

	toggleHitLines () {
		this.setState({
			showHitLines: !(this.state.showHitLines)
		})
	}

	extraModal (tip) {

		switch (tip) {
			case 'Lucky Tip':
				return (
					<div>
						<h6>Would you like to add Superball or Hit?</h6>
						<button className="hollow button" onClick={this.toggleSuperballLines}>Superball Extra $0.60 per line</button>
						<button className="hollow button" onClick={this.toggleHitLines}>Hit Extra $1.00 per line</button>
						{ this.state.showSuperballLines ?
						<div>
							<hr />
							<p>1. Choose how many lines you want to play</p>
							<div>
								{ this.state.superballLines.map((item, index) => {
									return (
										<span
											key={index}
											className="info badge"
											data-type="Superball"
											onClick={this.superballLinesInDollar}
										>
											{ item }
										</span>
									)	
								}) }
							</div>
							<p>2. Choose one Powerball number for all lines</p>
							<div>
								{ this.state.superballNums.map((item, index) => {
									return (
										<span key={index} className="info badge">{ item }</span>
									)
								}) }
							</div>
							<button className="hollow button">Random</button>
							<button className="hollow button">Reset</button>
						</div>
						: null
						}
						{ this.state.showHitLines ?
						<div>
							<hr />
							<p>Choose how many lines you want to add</p>
							<div>
								{ this.state.hitNums.map((item, index) => {
									return (
										<span
											key={index}
											className="alert badge"
											onClick={this.addHitLines}>{ item }</span>
									)
								}) }
							</div>
							<button className="hollow button">Reset</button>
						</div>
						: null
						}
					</div>
				)
				break
			case 'Power Tip':
				return (
					<div>
						<h6>Would you like to change Superball or add Hit?</h6>
						<button className="hollow button" onClick={this.toggleSuperballLines}>Superball Change</button>
						<button className="hollow button" onClick={this.toggleHitLines}>Hit Extra $1.00 per line</button>
						{ this.state.showSuperballLines ?
						<div>
							<hr />
							<p>Choose one Powerball number for all lines</p>
							<div>
								{ this.state.superballNums.map((item, index) => {
									return (
										<span key={index} className="info badge">{ item }</span>
									)
								}) }
							</div>
							<button className="hollow button">Random</button>
							<button className="hollow button">Reset</button>
						</div>
						: null
						}
						{ this.state.showHitLines ?
						<div>
							<hr />
							<p>Choose how many lines you want to add</p>
							<div>
								{ this.state.hitNums.map((item, index) => {
									return (
										<span
											key={index}
											className="alert badge"
											onClick={this.addHitLines}>{ item }</span>
									)
								}) }
							</div>
							<button className="hollow button">Reset</button>
						</div>
						: null
						}
					</div>
				)
				break
			case 'Triple Tip':
				return (
					<div>
						<h6>Would you like to change Superball or Hit?</h6>
						<button className="hollow button" onClick={this.toggleSuperballLines}>Superball Change</button>
						<button className="hollow button" onClick={this.toggleHitLines}>Hit Change</button>
						{ this.state.showSuperballLines ?
						<div>
							<hr />
							<p>Choose one Powerball number for all lines</p>
							<div>
								{ this.state.superballNums.map((item, index) => {
									return (
										<span key={index} className="info badge">{ item }</span>
									)
								}) }
							</div>
							<button className="hollow button">Random</button>
							<button className="hollow button">Reset</button>
						</div>
						: null
						}
						{ this.state.showHitLines ?
						<div>
							<hr />
							<p>Choose how many lines you want to add</p>
							<div>
								{ this.state.hitNums.map((item, index) => {
									return (
										<span
											key={index}
											className="alert badge"
											onClick={this.addHitLines}>{ item }</span>
									)
								}) }
							</div>
							<button className="hollow button">Reset</button>
						</div>
						: null
						}
					</div>
				)
				break
		}
	}
}

export default Extras