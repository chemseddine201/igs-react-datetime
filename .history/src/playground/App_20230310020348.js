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

	isValidDate = (current) => {
		console.log('check', current, current.isBetween(moment().subtract(2, 'days'), moment().add(1, 'months')));
		return current.isBetween(moment().subtract(2, 'days'), moment().add(1, 'months'));
	}
	render() {
		return (
			<div>
				<Datetime 
					isValidDate={(current) => {
						console.log('hello', current);
						return this.isValidDate(current);
					}}
				/>
			</div>
		);
	}
}

export default App;
