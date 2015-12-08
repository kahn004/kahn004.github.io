import React from 'react'

class Tip extends React.Component {

	render () {
		var tipType = this.props.tipType
		var tipOptions = tipType.tips.map((item, index) => {
			return (
				<div key={index}>
					<label className="button">
						<input
							data-tip={tipType.name}
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
			</div>
		)
	}
}

export default Tip