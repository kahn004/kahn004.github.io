import React from 'react'

class Extras extends React.Component {

	constructor (props) {
		super(props)

		this.state = {
			superballLines: [8, 9, 10, 15, 20]
		}

		this.superballLinesInDollar = this.superballLinesInDollar.bind(this)
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

	extraModal (tip) {

		switch (tip) {
			case 'Lucky Tip':
				return (
					<div>
						<h6>Would you like to add Superball or Hit?</h6>
						<button className="hollow button">Superball Extra $0.60 per line</button>
						<button className="hollow button">Hit Extra $1.00 per line</button>
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
								<span className="info badge">01</span>
								<span className="info badge">02</span>
								<span className="info badge">03</span>
								<span className="info badge">04</span>
								<span className="info badge">05</span>
								<span className="info badge">06</span>
								<span className="info badge">07</span>
								<span className="info badge">08</span>
								<span className="info badge">09</span>
								<span className="info badge">10</span>
							</div>
							<button className="hollow button">Random</button>
							<button className="hollow button">Reset</button>
						</div>
						<div>
							<hr />
							<p>Choose how many lines you want to add</p>
							<div>
								<span className="alert badge">01</span>
								<span className="alert badge">02</span>
								<span className="alert badge">03</span>
								<span className="alert badge">04</span>
								<span className="alert badge">05</span>
								<span className="alert badge">06</span>
								<span className="alert badge">07</span>
								<span className="alert badge">08</span>
								<span className="alert badge">09</span>
								<span className="alert badge">10</span>
								<span className="alert badge">11</span>
								<span className="alert badge">12</span>
								<span className="alert badge">13</span>
								<span className="alert badge">14</span>
								<span className="alert badge">15</span>
								<span className="alert badge">16</span>
								<span className="alert badge">17</span>
								<span className="alert badge">18</span>
								<span className="alert badge">19</span>
								<span className="alert badge">20</span>
							</div>
							<button className="hollow button">Reset</button>
						</div>
					</div>
				)
				break
			case 'Power Tip':
				return (
					<div>
						<h6>Would you like to change Superball or add Hit?</h6>
						<button className="hollow button">Superball Change</button>
						<button className="hollow button">Hit Extra $1.00 per line</button>
						<div>
							<hr />
							<p>Choose one Powerball number for all lines</p>
							<div>
								<span className="info badge">01</span>
								<span className="info badge">02</span>
								<span className="info badge">03</span>
								<span className="info badge">04</span>
								<span className="info badge">05</span>
								<span className="info badge">06</span>
								<span className="info badge">07</span>
								<span className="info badge">08</span>
								<span className="info badge">09</span>
								<span className="info badge">10</span>
							</div>
							<button className="hollow button">Random</button>
							<button className="hollow button">Reset</button>
						</div>
						<div>
							<hr />
							<p>Choose how many lines you want to add</p>
							<div>
								<span className="alert badge">01</span>
								<span className="alert badge">02</span>
								<span className="alert badge">03</span>
								<span className="alert badge">04</span>
								<span className="alert badge">05</span>
								<span className="alert badge">06</span>
								<span className="alert badge">07</span>
								<span className="alert badge">08</span>
								<span className="alert badge">09</span>
								<span className="alert badge">10</span>
								<span className="alert badge">11</span>
								<span className="alert badge">12</span>
								<span className="alert badge">13</span>
								<span className="alert badge">14</span>
								<span className="alert badge">15</span>
								<span className="alert badge">16</span>
								<span className="alert badge">17</span>
								<span className="alert badge">18</span>
								<span className="alert badge">19</span>
								<span className="alert badge">20</span>
							</div>
							<button className="hollow button">Reset</button>
						</div>
					</div>
				)
				break
			case 'Triple Tip':
				return (
					<div>
						<h6>Would you like to change Superball or Hit?</h6>
						<button className="hollow button">Superball Change</button>
						<button className="hollow button">Hit Change</button>
						<div>
							<hr />
							<p>Choose one Powerball number for all lines</p>
							<div>
								<span className="info badge">01</span>
								<span className="info badge">02</span>
								<span className="info badge">03</span>
								<span className="info badge">04</span>
								<span className="info badge">05</span>
								<span className="info badge">06</span>
								<span className="info badge">07</span>
								<span className="info badge">08</span>
								<span className="info badge">09</span>
								<span className="info badge">10</span>
							</div>
							<button className="hollow button">Random</button>
							<button className="hollow button">Reset</button>
						</div>
						<div>
							<hr />
							<p>Choose how many lines you want to add</p>
							<div>
								<span className="alert badge">01</span>
								<span className="alert badge">02</span>
								<span className="alert badge">03</span>
								<span className="alert badge">04</span>
								<span className="alert badge">05</span>
								<span className="alert badge">06</span>
								<span className="alert badge">07</span>
								<span className="alert badge">08</span>
								<span className="alert badge">09</span>
								<span className="alert badge">10</span>
								<span className="alert badge">11</span>
								<span className="alert badge">12</span>
								<span className="alert badge">13</span>
								<span className="alert badge">14</span>
								<span className="alert badge">15</span>
								<span className="alert badge">16</span>
								<span className="alert badge">17</span>
								<span className="alert badge">18</span>
								<span className="alert badge">19</span>
								<span className="alert badge">20</span>
							</div>
							<button className="hollow button">Reset</button>
						</div>
					</div>
				)
				break
		}
	}
}

export default Extras