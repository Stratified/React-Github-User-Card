import React from 'react';
import './App.css';
import axios from 'axios';
import Users from './components/Users';

class App extends React.Component {
	constructor() {
		super();
		this.state = { users: [], username: 'stratified' };
	}

	componentDidMount() {
		axios
			.get(
				`https://api.github.com/users/${this.state.username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
			)
			.then((res) => {
				this.setState({ users: res.data });
				console.log('Resolved data to: ', res);
			})
			.catch((err) => {
				console.log('Error in fetching data from the API! ', err);
			});
	}

	render() {
		return (
			<div className='App'>
				<Users users={this.state.users} />
			</div>
		);
	}
}
export default App;
