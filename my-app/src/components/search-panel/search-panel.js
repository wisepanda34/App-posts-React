import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}
		this.onUpdateSearch = this.onUpdateSearch.bind(this);
	}
	onUpdateSearch(e) {
		const term = e.target.value;
		this.setState({ term: term });
		//эта строка говорит, что мы передаем term в функцию onUpdateSearch() вверх в props App.js
		//функции onUpdateSearch() и props.onUpdateSearch() для удобства одноименные, но не рекурсия
		this.props.onUpdateSearch(term);
	}

	render() {
		return (
			<input
				className='form-control search-input'
				type='text'
				placeholder='Search by notes'
				onChange={this.onUpdateSearch}
			/>
		)
	}
}


