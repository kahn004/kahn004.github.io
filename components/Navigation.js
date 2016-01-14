import React, { Component } from 'react'
import { Link } from 'react-router'
import Radium from 'radium'

class Navigation extends Component {
	render () {
		const links = [
			{
				url: '/ghetto',
				title: 'Ghetto Superball'
			},
			{
				url: '/huge',
				title: 'Huge'
			},
			{
				url: '/gini',
				title: 'Gini'
			},
			{
				url: '/goldeneye',
				title: 'Goldeneye'
			},
			{
				url: '/numbers',
				title: 'Numbers'
			},
			{
				url: '/instant-noodle',
				title: 'Instant Noodle'
			},
			{
				url: '/second-marriage',
				title: 'Second Marriage'
			}
		].map((link, index) =>
			<li key={index}>
				<Link to={link.url}>{ link.title }</Link>
			</li>
		)
		return (
			<ul>
				{ links }
			</ul>
		)
	}
}

export default Radium(Navigation)