import React from 'react';
import './DataText.css';

const dataText = (props) => {
	return (
		<div key="data">
			<article className="message">
				{!props.error ? (
					<React.Fragment>
						<div className="message-header">
							<p>Date: {props.data.date}</p>
						</div>
						<div className="message-body">
							<p>Cases: {props.data.confirmed}</p>
							<p>Deaths: {props.data.deaths}</p>
							<p>Recovered: {props.data.recovered}</p>
						</div>
					</React.Fragment>
				) : (
					<React.Fragment>
						<div className="message-header">
							<p>No data available</p>
						</div>
						<div className="message-body">
							<p>Please select another country</p>
						</div>
					</React.Fragment>
				)}
			</article>
		</div>
	);
};

export default dataText;
