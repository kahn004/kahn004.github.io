const superball = {
	gameMode: true,
	tipSelected: false,
	selectedTip: '',
	selectedTipPrice: toDecimal(0),
	totalGhettoLines: 0,
	totalSuperballLines: 0,
	totalSuperballLinesPrice: toDecimal(0),
	totalHitLines: 0,
	totalHitLinesPrice: toDecimal(0),
	totalPrice: toDecimal(0),
	totalDraws: 1,
	luckyTip: {
		name: 'Lucky Tip',
		tips: [4.8, 6, 9, 12],
		lines: {
			ghetto: [8, 10, 15, 20]
		}
	},
	powerTip: {
		name: 'Power Tip',
		tips: [9.6, 12, 18, 24],
		lines: {
			ghetto: [8, 10, 15, 20],
			superball: [8, 10, 15, 20]
		}
	},
	trippleTip: {
		name: 'Tripple Tip',
		tips: [14, 16, 20, 26],
		lines: {
			ghetto: [10, 10, 15, 20],
			superball: [10, 10, 15, 20],
			hit: [2, 4, 2, 2]
		}
	},
}

function toDecimal (n) {
	return parseFloat(n).toFixed(2)
}

export default superball