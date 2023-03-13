import React from 'react';

export default function ViewNavigation( { 
	isValidDate,
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
	console.log(isValidDate());
	return (
		<tr>
			{(viewDate.isAfter(minDate) || isValidDate()) && (<th className="rdtPrev" onClick={ onClickPrev }>
				<span>{prevIcon || '‹'}</span>
			</th>)}
			<th className="rdtSwitch" colSpan={ switchColSpan } onClick={ onClickSwitch } {...switchProps}>
				{ switchContent }
			</th>
			{(viewDate.isBefore(maxDate) || isValidDate()) ? (<th className="rdtNext" onClick={ onClickNext }>
				<span>{nextIcon || '›'}</span>
			</th>) : null}
		</tr>
	);
}
