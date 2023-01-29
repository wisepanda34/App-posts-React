import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			term: ''
		}

	}
	render() {
		return (
			<input
				className='form-control search-input'
				type='text'
				placeholder='Search by notes'
			/>
		)
	}
}


