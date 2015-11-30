import React from 'react'
import { render } from 'react-dom'
import { createHistory, useBasename } from 'history'
import { Router } from 'react-router'

var history = createHistory()

// var history = useBasename(createHistory)({
// 	basename: 'lotto'
// })

var rootRoute = {
	component: 'div',
	childRoutes: [
		{
			path: '/',
			component: require('./components/Main'),
			childRoutes: [
				require('./routes/Calendar')
			]
		}
	]
}

render(
	<Router history={history} routes={rootRoute} />,
	document.getElementById('example')
)