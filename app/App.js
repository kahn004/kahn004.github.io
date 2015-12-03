import React from 'react'
import { render } from 'react-dom'
import { createHistory } from 'history'
import { Router, Route, IndexRoute } from 'react-router'
import { AltContainer } from 'alt'

// import MyLottoActions from './actions/MyLottoActions'
// import MyLottoStore from './stores/MyLottoStore'

import Home from './components/Home'
import Main from './components/Main'
import Big from './routes/games/Big/Big'
import Bullseye from './routes/games/Bullseye/Bullseye'
import InstantKiwi from './routes/games/InstantKiwi/InstantKiwi'
import Keno from './routes/games/Keno/Keno'
import PlayThree from './routes/games/PlayThree/PlayThree'
import Powerball from './routes/games/Powerball/Powerball'
import SecondChance from './routes/games/SecondChance/SecondChance'
import BuyADip from './routes/games/games-play/BuyADip'
import Favourites from './routes/games/games-play/Favourites'
import PickYourOwn from './routes/games/games-play/PickYourOwn'

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
			<Route path="powerball" component={Powerball}>
		        <Route path="buy-a-dip" component={BuyADip} />
		        <Route path="favourites" component={Favourites} />
		        <Route path="pick-your-own" component={PickYourOwn} />
		    </Route>
			<Route path="big" component={Big} />
			<Route path="keno" component={Keno} />
			<Route path="bullseye" component={Bullseye} />
			<Route path="playthree" component={PlayThree} />
			<Route path="instantkiwi" component={InstantKiwi} />
			<Route path="secondchance" component={SecondChance} />
		</Route>
	</Router>,
  document.getElementById('example')
)
