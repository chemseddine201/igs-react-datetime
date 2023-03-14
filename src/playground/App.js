// This file is the playground used for development purposes (npm run playground)
// not part of the library
import React from 'react';
import Datetime from '../DateTime';
import moment from 'moment';

// import moment from 'moment';
// import 'moment/locale/tzm-latn';
// moment.locale('tzm-latn');

class App extends React.Component { 
	state = {
		date: new Date(),
		minDate: moment().subtract(5, 'days')
	}

	changeDate = () => {
		this.setState({
			mindate: this.state.minDate.add(1, 'days')
		});
	}
	
	render() {
		console.log('minDate', this.state.minDate.format('YYYY-MM-DD'));
		return (
			<>
				<div style={{
					position: 'absolute',
					left: -5
				}}>
					<Datetime 
						minDate={this.state.minDate}
						maxDate={moment().add(1, 'years')}
						lineThrough={false}
						value={this.state.date}
						onChange={(date) => {
							this.setState({
								date: date
							});
						}}
						closeOnSelect={true}
						timeFormat='HH:mm A'
						dateFormat='YYYY-MM-DD'
					/>
					<button onClick={() => {
						this.changeDate();
					}}> Change Me</button>
				</div>
				<div style={{
					position: 'absolute',
					right: -5
				}}>
					<Datetime 
						minDate={this.state.minDate}
						maxDate={moment().add(1, 'years')}
						lineThrough={false}
						value={this.state.date}
						onChange={(date) => {
							this.setState({
								date: date
							});
						}}
						closeOnSelect={true}
						timeFormat='HH:mm A'
						dateFormat='YYYY-MM-DD'
					/>
					<button onClick={() => {
						this.changeDate();
					}}> Change Me</button>
				</div>
			</>
		);
	}
}

export default App;
