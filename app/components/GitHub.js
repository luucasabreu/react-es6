import React, { Component } from 'react';

import SearchUser from './SearchUser';
import UserInfo from './UserInfo';

class GitHub extends Component {
	constructor() {
		super();

		this.state = {
			user: null,
			repos: []
		}

		this.updateRepos = this.updateRepos.bind(this);
	}

	updateUser = (user) => {
		this.setState({user: user});
	}

	updateRepos(repos) {
		this.setState({repos: repos});
	}

	render() {
		return (
			<div className="container">
				<SearchUser 
					updateUser={this.updateUser}
					updateRepos={this.updateUser}
				/>
				<UserInfo />
			</div>
		);
	}
}

export default GitHub;
