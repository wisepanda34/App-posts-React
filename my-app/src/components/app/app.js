import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from '../post-list';
import PostAddForm from "../post-add-form";

import './app.css';



export default class App extends Component {
	constructor(props) {
		super(props);
		// stateнапрямую менять нельзя, можно менять значения свойств в state
		this.state = {
			data: [
				{ label: 'Going to learn React', important: true, id: 1 },
				{ label: 'That is so good', important: false, id: 2 },
				{ label: 'I need a break...', important: false, id: 3 }

			]
		}
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);

		this.maxId = 4;
	};

	deleteItem(id) {
		this.setState(({ data }) => {
			//находим позицию объекта в массиве data по id
			const index = data.findIndex(elem => elem.id === id);

			//получаем новый массив, но без этого объекта
			const newArr = [...data.slice(0, index), ...data.slice(index + 1)];

			//перезаписываем значение в свойство state
			return {
				data: newArr
			}
		})
	}
	addItem(body) {
		const newItem = {
			label: body,
			important: false,
			id: this.maxId++,
		}
		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr
			}
		})
	}

	render() {
		return (
			<div className='app' >
				<AppHeader />
				<div className='serch-panel d-flex'>
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList
					posts={this.state.data}
					onDelete={this.deleteItem} />
				<PostAddForm
					onAdd={this.addItem} />
			</div>
		)
	}
}

