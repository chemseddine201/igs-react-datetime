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
	//console.log(viewDate.format('YYYY-MM-DD'), maxDate.format('YYYY-MM-DD'), viewDate.isBefore(maxDate));
	//console.log(viewDate.format('YYYY-MM-DD'), minDate.format('YYYY-MM-DD'), viewDate.isAfter(minDate));
	return (
		<tr>
			{(!minDate || viewDate.endOf('month').isAfter(minDate)) ? (<th className="rdtPrev" onClick={ onClickPrev }>
				<span>{prevIcon || '‹'}</span>
			</th>) : null}
			<th className="rdtSwitch" colSpan={ 2 } onClick={ onClickSwitch } {...switchProps}>
				{ switchContent }
			</th>
			{(!maxDate || viewDate.endOf('month').isBefore(maxDate)) ? (<th className="rdtNext" onClick={ onClickNext }>
				<span>{nextIcon || '›'}</span>
			</th>) : null}
		</tr>
	);
}
