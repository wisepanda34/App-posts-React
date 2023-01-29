import React from 'react';
import './app-header.css';

const AppHeader = ({ liked, allPosts }) => {
	return (
		<div className='app-header d-flex'>
			<h1>Yevgen Naydenko</h1>
			<h2>{allPosts} notes, is liked {liked}</h2>
		</div>
	)
}

export default AppHeader;