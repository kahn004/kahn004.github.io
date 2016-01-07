import React from 'react'

import { render } from 'react-dom'
import { createHistory } from 'history'
import { Router, Route, IndexRoute } from 'react-router'
// import { AltContainer } from 'alt'

// import MyLottoActions from './actions/MyLottoActions'
// import MyLottoStore from './stores/MyLottoStore'

import Home from './components/Home'
import Main from './components/Main'
import GhettoChanges from './routes/GhettoChanges'
import Huge from './routes/games/Huge/Huge'
import Goldeneye from './routes/games/Goldeneye/Goldeneye'
import InstantNoodle from './routes/games/InstantNoodle/InstantNoodle'
import Gini from './routes/games/Gini/Gini'
import Numbers from './routes/games/Numbers/Numbers'
import Superball from './routes/games/Superball/Superball'
import SecondMarriage from './routes/games/SecondMarriage/SecondMarriage'
import BuyATip from './routes/games/games-play/BuyATip'
import Bookmarks from './routes/games/games-play/Bookmarks'
import SelectYourOwn from './routes/games/games-play/SelectYourOwn'

var history = createHistory()

class App extends React.Component {

	render () {
		return (
			<div className="row">
				<Main onEdit={this.editUser} onDelete={this.deleteUser} />
				{ this.props.children }
			</div>
		)
	}

	// addUser () {
	// 	MyLottoActions.create({name: 'New user'})
	// }

	// editUser (id, balance) {
	// 	MyLottoActions.update({id, balance})
	// }

	// deleteUser (id) {
	// 	MyLottoActions.detele(id)
	// }
}

render(
	<Router history={history}>
		<Route path="/" component={App}>
      		<IndexRoute component={Home} />
			<Route path="ghetto" component={Superball}>
		        <Route path="buy-a-tip" component={BuyATip} />
		        <Route path="bookmarks" component={Bookmarks} />
		        <Route path="select-your-own" component={SelectYourOwn} />
		    </Route>
			<Route path="huge" component={Huge} />
			<Route path="gini" component={Gini} />
			<Route path="goldeneye" component={Goldeneye} />
			<Route path="numbers" component={Numbers} />
			<Route path="instant-noodle" component={InstantNoodle} />
			<Route path="second-marriage" component={SecondMarriage} />
			<Route path="ghetto-changes" component={GhettoChanges} />
		</Route>
	</Router>,
  document.getElementById('example')
)
