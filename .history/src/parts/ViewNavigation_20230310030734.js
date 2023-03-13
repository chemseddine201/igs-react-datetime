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
	console.log(viewDate)
	return (
		<tr>
			{(viewDate.isAfter(minDate)) ? (<th className="rdtPrev" onClick={ onClickPrev }>
				<span>{prevIcon || '‹'}</span>
			</th>) : null}
			<th className="rdtSwitch" colSpan={ switchColSpan } onClick={ onClickSwitch } {...switchProps}>
				{ switchContent }
			</th>
			{(viewDate.isBefore(maxDate)) ? (<th className="rdtNext" onClick={ onClickNext }>
				<span>{nextIcon || '›'}</span>
			</th>) : null}
		</tr>
	);
}
