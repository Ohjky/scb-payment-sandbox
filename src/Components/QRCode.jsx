import React from 'react'
import axios from 'axios'
class QRCode extends React.Component {
	state = {
		amount: 0,
		qrcode: null
	}

	handleAmount = e => {
		this.setState({ amount: e.target.value })
	}

	handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:4000/api/scb/qrcode', { order_amount: this.state.amount }, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem('token')}`
				}
			})
			this.setState({
				qrcode: response.data
			})
		} catch (e) {
			console.log(e)
		}
	}

	render() {
		return (
			<div>
				<div>
					<form onSubmit={this.handleSubmit}>
						<label htmlFor="">Amount: </label>
						<input type="text" onChange={this.handleAmount} />
						<button type="submit">Generate</button>
					</form>
				</div>
				{ this.state.qrcode &&<div><img src={`data:image/jpeg;base64,${this.state.qrcode.qrImage}`} alt=""/></div> }
			</div>
		)
	}
}

export default QRCode
