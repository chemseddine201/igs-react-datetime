import React from 'react';

export default function ViewNavigation( { 
	isValidDate = true,
	onClickPrev,
	onClickSwitch,
	onClickNext,
	switchContent,
	switchColSpan,
	switchProps,
	prevIcon,
	nexIcon,
	...props
} ) {
	return (
		<tr>
			{isValidDate() && (<th className="rdtPrev" onClick={ onClickPrev }>
				<span>{prevIcon || '‹'}</span>
			</th>)}
			<th className="rdtSwitch" colSpan={ switchColSpan } onClick={ onClickSwitch } {...switchProps}>
				{ switchContent }
			</th>
			{isValidDate() && (<th className="rdtNext" onClick={ onClickNext }>
				<span>{nexIcon || '›'}</span>
			</th>)}
		</tr>
	);
}
