import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter, routeReducer } from 'redux-simple-router'
import {
	App,
	Home,
	Changes,
	Gini,
	Goldeneye,
	Huge,
	InstantNoodle,
	Numbers,
	SecondMarriage,
	Superball,
	SuperballBuyATip,
	SuperballBookmarks,
	SuperballSelectYourOwn
} from './views'
import reducers from './reducers'

require('./stylesheets/main.scss')

const reducer = combineReducers(Object.assign({}, reducers, {
	routing: routeReducer
}))
const store = createStore(reducer)
const history = createHistory()

syncReduxAndRouter(history, store)

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Home} />
				<Route path="ghetto" component={Superball}>
					<Route path="buy-a-tip" component={SuperballBuyATip} />
					<Route path="bookmarks" component={SuperballBookmarks} />
					<Route path="select-your-own" component={SuperballSelectYourOwn} />	
				</Route>
				<Route path="huge" component={Huge} />
				<Route path="gini" component={Gini} />
				<Route path="goldeneye" component={Goldeneye} />
				<Route path="numbers" component={Numbers} />
				<Route path="instant-noodle" component={InstantNoodle} />
				<Route path="second-marriage" component={SecondMarriage} />
				<Route path="ghetto-changes" component={Changes} />
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
)