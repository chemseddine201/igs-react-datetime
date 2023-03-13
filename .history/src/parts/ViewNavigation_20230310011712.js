import React from 'react';

export default function ViewNavigation( { 
	onClickPrev,
	onClickSwitch,
	onClickNext,
	switchContent,
	switchColSpan,
	switchProps,
	prevIcon,
	nexIcon
} ) {
	return (
		<tr>
			<th className="rdtPrev" onClick={ onClickPrev }>
				<span>{prevIcon || '‹'}</span>
			</th>
			<th className="rdtSwitch" colSpan={ switchColSpan } onClick={ onClickSwitch } {...switchProps}>
				{ switchContent }
			</th>
			<th className="rdtNext" onClick={ onClickNext }>
				<span>{nexIcon || '›'}</span>
			</th>
		</tr>
	);
}
