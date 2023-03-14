import React from 'react';

export default function ViewNavigation( { 
	onClickPrev,
	onClickSwitch,
	onClickNext,
	switchContent,
	switchColSpan,
	switchProps,
	prevIcon,
	nextIcon,
	viewDate,
	minDate,
	maxDate,
	...props
} ) {
	return (
		<tr>
			{(!minDate || viewDate.endOf('month').isAfter(minDate)) ? (<th className="rdtPrev" onClick={ onClickPrev }>
				{prevIcon || <span className='prev-icon chevron left'></span>}
			</th>) : null}
			<th className="rdtSwitch" colSpan="5" onClick={ onClickSwitch } {...switchProps}>
				{ switchContent }
			</th>
			{(!maxDate || viewDate.endOf('month').isBefore(maxDate)) ? (<th className="rdtNext" onClick={ onClickNext }>
				{nextIcon || <span className='next-icon chevron right'></span>}
			</th>) : null}
		</tr>
	);
}
