import constants from '../constants'

// just a dummy login/logout helper
function update (state = {}, action) {
	switch (action.type) {
		case constants.LOGIN:
			return {
				...state,
				name: 'Sam',
				loggedIn: true,
				wallet: toDecimal(14)
			}
		case constants.LOGOUT:
			return {
				...state,
				loggedIn: false
			}
		case constants.SUBSTRACT:
			if ((state.wallet - action.amount) > 0) {
				return {
					...state,
					wallet: toDecimal(state.wallet - action.amount)
				}	
			} else {
				alert('not enough balance')
				return state
			}
		default:
			return state
	}
}

function toDecimal (n) {
	return parseFloat(n).toFixed(2)
}

export default update