import constants from '../constants'

function login () {
	return {
		type: constants.LOGIN,
		loggedIn: true
	}
}

function logout () {
	return {
		type: constants.LOGOUT,
		loggedIn: false
	}
}

function substract (n) {
	return {
		type: constants.SUBSTRACT,
		amount: n
	}
}

module.exports = { login, logout, substract }