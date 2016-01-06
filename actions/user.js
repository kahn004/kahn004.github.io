import constants from '../constants'

function login () {
	return {
		type: constants.LOGIN,
		loggedIn: true
	}
}

function logout (n) {
	return {
		type: constants.LOGOUT,
		loggedIn: false,
		balance: n
	}
}

module.exports = { login, logout }