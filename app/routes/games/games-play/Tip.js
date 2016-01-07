import React from 'react'

import Extras from './Extras'

class Tip extends React.Component {

	constructor (props) {
		super(props)
	}

	render () {
		var tipType = this.props.tipType
		var tipOptions = tipType.tips.map((item, index) => {
			return (
				<div key={index}>
					<label className="secondary label">
						<input
							data-tip={tipType.name}
							data-ghetto={tipType.numberOfLines.ghetto ? tipType.numberOfLines.ghetto[index] : 0}
							data-superball={tipType.numberOfLines.superball ? tipType.numberOfLines.superball[index] : 0}
							data-hit={tipType.numberOfLines.hit ? tipType.numberOfLines.hit[index] : 0}
							type="radio"
							name="tips"
							value={item}
							onClick={this.props.onClickTip} />
						${ item }
						{ tipType.numberOfLines.ghetto ? ', ' + tipType.numberOfLines.ghetto[index] + ' Ghetto lines' : null }
						{ tipType.numberOfLines.superball ? ', ' + tipType.numberOfLines.superball[index] + ' Superball lines' : null }
						{ tipType.numberOfLines.hit ? ', ' + tipType.numberOfLines.hit[index] + ' Hit lines' : null }
					</label>
				</div>
			)
		})
		return (
			<div>
				{ tipOptions }
				<Extras
					tip={tipType.name}
					lolL={this.props.onClickLine}
					lolL2={this.props.onClickLine2} />
			</div>
		)
	}
}

export default Tip