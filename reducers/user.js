import constants from '../constants'

const initialState = {
	name: 'Sam',
	loggedIn: false,
	wallet: 0
}

// just a dummy login/logout helper
function update (state = initialState, action) {
	switch (action.type) {
		case constants.LOGIN:
			return {
				name: state.name,
				loggedIn: action.loggedIn,
				wallet: state.wallet
			}
		case constants.LOGOUT:
			return {
				name: state.name,
				loggedIn: action.loggedIn,
				wallet: action.balance
			}
		default:
			return state
	}
}

module.exports = update