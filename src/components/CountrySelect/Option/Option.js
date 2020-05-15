import React from 'react';

const option = (props) =>
	props.codes.map((code) => {
		return (
			<option key={code.name} value={code.code3}>
				{code.name}
			</option>
		);
	});

export default option;
