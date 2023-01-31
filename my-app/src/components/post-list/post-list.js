import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

//onDelete, onToggleImportant, onToggleLiked 
const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
	const elements = posts.map((item) => {
		//отделяем id от от остальных данных с помощью деструктаризации и спред-оператора
		const { id, ...itemProps } = item;
		return (
			<li key={id} className='list-group-item'>
				<PostListItem
					{...itemProps}
					//
					onDelete={() => onDelete(id)}
					onToggleImportant={() => onToggleImportant(id)}
					onToggleLiked={() => onToggleLiked(id)} />
			</li>
		)
	});
	return (
		<ul className='app-list list-group'>
			{elements}
		</ul>
	)
}

export default PostList;