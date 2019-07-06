import React from 'react'
import axios from 'axios'
class Login extends React.Component {
	state = {
		username: '',
		password: ''
	}

	handleChangedInput = e => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = async e => {
		e.preventDefault()
		try {
			const response = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/login`, {
				username: this.state.username,
				password: this.state.password
			})
			localStorage.setItem('token', response.data.token)
			this.props.history.push('/qrcode')
		} catch (e) {
			console.log(e)
		}
	}

	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="">Username:</label>
					<input type="text" name="username" onChange={this.handleChangedInput} />
				</div>
				<div>
					<label htmlFor="">Password:</label>
					<input type="password" name="password" onChange={this.handleChangedInput} />
				</div>
				<button type="submit" >Login</button>
				</form>
			</div>
		)
	}
}

export default Login
