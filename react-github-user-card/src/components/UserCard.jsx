import React, { Component } from 'react';

class UserCard extends Component {
	render() {
		const { avatar_url, login, followers } = this.props.user;

		return (
			<div>
				<div className='userCard'>
					<img src={avatar_url} style={{ borderRadius: '30px' }}></img>
					<h2>Username: {login} </h2>
					<p>Followers: {followers}</p>
				</div>
			</div>
		);
	}
}

export default UserCard;
