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
	...props
} ) {
	console.log(isValidDate());
	return (
		<tr>
			{isValidDate() && (<th className="rdtPrev" onClick={ onClickPrev }>
				<span>{prevIcon || '‹'}</span>
			</th>)}
			<th className="rdtSwitch" colSpan={ switchColSpan } onClick={ onClickSwitch } {...switchProps}>
				{ switchContent }
			</th>
			{isValidDate() && (<th className="rdtNext" onClick={ onClickNext }>
				<span>{nextIcon || '›'}</span>
			</th>)}
		</tr>
	);
}
