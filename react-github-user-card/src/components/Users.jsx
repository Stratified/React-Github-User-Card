import React, { Component } from 'react';
import UserCard from './UserCard';

const Users = ({ users }) => {
	return (
		<div className='userCard-container'>
			<UserCard user={users} />
		</div>
	);
};

export default Users;
