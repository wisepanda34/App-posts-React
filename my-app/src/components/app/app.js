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
				{ label: 'Going to learn React', important: true, like: false, id: 1 },
				{ label: 'That is so good', important: false, like: false, id: 2 },
				{ label: 'I need a break...', important: false, like: false, id: 3 }

			],
			term: []
		}
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onToggleLiked = this.onToggleLiked.bind(this);

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
	onToggleImportant(id) {
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id);
			const old = data[index];
			const newItem = { ...old, important: !old.important };
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
			return {
				data: newArr
			}
		});
	}
	onToggleLiked(id) {
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id);
			const old = data[index];
			const newItem = { ...old, like: !old.like };
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
			return {
				data: newArr
			}
		});
	}
	searchPost(items, term) {
		if (term.length === 0) {
			return items;
		}

		return items.filter((item) => {
			return item.label.indexOf(term) > -1
		})
	}


	render() {
		const { data, term } = this.state;

		const liked = data.filter(item => item.like).length;
		const allPosts = data.length;

		const visiblePosts = this.searchPost(data, term);

		return (
			<div className='app' >
				<AppHeader
					liked={liked}
					allPosts={allPosts} />
				<div className='serch-panel d-flex'>
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList
					posts={visiblePosts}
					onDelete={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleLiked={this.onToggleLiked}
				/>
				<PostAddForm
					onAdd={this.addItem} />
			</div>
		)
	}
}

