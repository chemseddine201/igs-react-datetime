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
		date: new Date()
	}
	
	render() {
		return (
			<div>
				<Datetime 
					minDate={moment().subtract(2, 'days')}
					maxDate={moment().add(1, 'months')}
					lineThrough={false}
					value={this.state.date}
					onChange={(date) => {
						this.setState({
							date: date
						});
					}}
					timeFormat='HH:mm A'
					dateFormat='YYYY-MM-DD'
					inputProps={{
						readOnly: true,
						readOnlyClass:"",
						onMouseDown: () => false
					}}
					//prevIcon='prev'
					//nextIcon='next'
				/>
			</div>
		);
	}
}

export default App;
