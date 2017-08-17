import React, { Component } from 'react';

class UserRepos extends Component{
	constructor(props) {
		super(props);
		this.state = {
			reposCount: 0,
		}
	}

	componentWillReceiveProps(props) {
		this.setState({reposCount: props.repos.length});
	}

	render() {
		const { repos } = this.props;
		var reposList = repos.map(function(repo, key) {
			return (
				<div key={key} className="thumbnail">
					<div className="captrion">
						<h3>
							{repo.name}
							<span className="badge">{repo.stargazers_count} STARS</span>
						</h3>
						<p>{repo.description}</p>
						<p>
							<a href={repo.html_url} target="_blank" className="btn btn-primary" role="button">Repository</a>
							<a href={repo.html_url + '/issues'} target="_blank" className="btn btn-default" role="button">Issues ({repo.open_issues})</a>
						</p>

					</div>
				</div>
			);
		});

		return (
			<div>
				<h2>{this.state.reposCount} repositories</h2>
				{reposList}
			</div>
		);
	}
}

export default UserRepos;