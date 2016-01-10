import React, { Component, PropTypes } from 'react'
import AddLines from './AddLines'

class Tip extends Component {
	constructor (props) {
		super(props)

		this.handleClick = this.handleClick.bind(this)

		this.state = {
			addLinesEnabled: false,
		}
	}
	handleClick (e) {
		this.setState({ addLinesEnabled: true })
	}
	render () {
		const { activeTip, tipType } = this.props
		const tipOptions = tipType.tips.map((item, i) =>
			<li key={i}>
				<label
					onClick={this.handleClick}>
					<input
						data-tip={tipType.name}
						data-ghetto={tipType.lines.ghetto ? tipType.lines.ghetto[i] : 0}
						data-superball={tipType.lines.superball ? tipType.lines.superball[i] : 0}
						data-hit={tipType.lines.hit ? tipType.lines.hit[i] : 0}
						type="radio"
						name="tips"
						value={item}
						onChange={this.props.onChange} />
						${ item }
						{ tipType.lines.ghetto ? ' , ' + tipType.lines.ghetto[i] + ' Ghetto lines' : null }
						{ tipType.lines.superball ? ' , ' + tipType.lines.superball[i] + ' Superball lines' : null }
						{ tipType.lines.hit ? ' , ' + tipType.lines.hit[i] + ' Hit lines' : null }
				</label>
			</li>
		)
		return (
			<div>
				<h4>{ tipType.name }</h4>
				{ tipType.lines.ghetto ? <div>Ghetto | $1 million</div> : null }
				{ tipType.lines.superball ? <div>Superball | $13 million</div> : null }
				{ tipType.lines.hit ? <div>Hit | $300 Thousand</div> : null }
				<ul>{ tipOptions }</ul>
				{ this.state.addLinesEnabled && activeTip === tipType.name ?
					<AddLines
						tip={tipType.name} /> : null }
				
			</div>
		)
	}
}

Tip.propTypes = {
	activeTip: PropTypes.string.isRequired,
	tipType: PropTypes.object.isRequired,
	onChange: PropTypes.func.isRequired
}

export default Tip