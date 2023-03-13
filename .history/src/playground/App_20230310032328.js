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
		return current.isBetween(moment().subtract(1, 'days'), moment().add(1, 'days'));
	}
	
	render() {
		return (
			<div>
				<Datetime 
					//minDate={moment().subtract(2, 'days')}
					//maxDate={moment().add(1, 'months')}
					isValidDate={(current) => {
						this.isValidDate(current);
					}}
					lineThrough={false}
				/>
			</div>
		);
	}
}

export default App;
