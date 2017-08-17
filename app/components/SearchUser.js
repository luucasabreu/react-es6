import React, { Component } from 'react';
import GitHubUser from '@/services/GitHubUser';

class SearchUser extends Component{
	propTypes = {
		updateUser: React.PropTypes.func.isRequired,
		updateRepos: React.PropTypes.func.isRequired,
	}

	handleSubmit = (e) => {
		e.preventDefault();

		GitHubUser.getByUsername(this.refs.username.value)
		.then((response) => {
			this.props.updateUser(response.data);
		});

		GitHubUser.getReposByUsername(this.refs.username.value)
		.then((response) => {
			this.props.updateRepos(response.data);
		});
	}
	
	render() {
		return (
			<div className="jumbotron">
				<h1>GitHub Info</h1>
				<div className="row">
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label>Usename</label>
							<input
								type="text"
								ref="username"
								className="form-control"
								placeholder="Ex: luucasabreu"
								/>
						</div>
						<button
							type="submit"
							className="btn btn-primary">Buscar
						</button>
					</form>
				</div>
			</div>
		)
	}
}

export default SearchUser