import uuid from 'node-uuid'
import alt from 'alt'
import MyLottoActions from '../actions/MyLottoActions'

class NoteStore {
	
	constructor () {
		this.bindActions(MyLottoActions)

		this.users = []
	}

	create (user) {
		var users = this.users

		user.id = uuid.v4()

		this.setState({
			users: users.concat(user)
		})

		//
		console.log('create a user')
	}

	update ({id, balance}) {
		var users = this.users
		var userIndex = this.findUser(id)

		if (userIndex < 0) {
			return
		}

		users[userIndex].balance = balance

		this.setState({users})

		//
		console.log('update user')
	}

	delete (id) {
		var users = this.users
		var userIndex = findUser(id)

		if (userIndex < 0) {
			return
		}

		this.setState({
			users: users.slice(0, userIndex).concat(users.slice(userIndex + 1))
		})

		//
		console.log('delete a user')
	}

	findUser (id) {
		var users = this.users
		var userIndex = users.findIndex((user) => user.id === id)

		if (userIndex < 0) {
			console.log('Failed to find user', users, id)
		}

		return userIndex
	}
}

export default alt.createStore(NoteStore, 'NoteStore')