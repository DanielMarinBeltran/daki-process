import React from 'react';
import './boxdata.scss';

function BoxData({ data }) {
	return (
		<div className="data-box">
			{data.map((i) => {
				return (
					<div key={i.id}>
						<h2>{i.text}</h2>
						<span>{i.subText}</span>
					</div>
				);
			})}
		</div>
	);
}

export default BoxData;
