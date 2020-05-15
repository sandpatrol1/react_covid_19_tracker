import React from 'react';
import './Footer.css';

const footer = () => {
	return (
		<React.Fragment>
			<footer className="footer">
				<div className="content has-text-centered">
					<p>
						Country specific data is subject to different approaches to testing, diagnosis etc. This app
						uses data from John Hopkins University made available through API initiative here:
						https://covidapi.info/ Notice: data is subject to errors.
					</p>
					<p>
						<strong>COVID-19</strong> by <a href="https://github.com/sandpatrol1">SANDPATROL</a>. The source
						code is licensed
						<a href="http://opensource.org/licenses/mit-license.php"> MIT</a>.
					</p>
				</div>
			</footer>
		</React.Fragment>
	);
};

export default footer;
