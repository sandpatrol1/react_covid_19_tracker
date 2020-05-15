import React from 'react';
import './Header.css';

const header = () => {
	return (
		<div>
			<section className="hero is-primary">
				<div className="hero-body has-background-grey-dark is-bold">
					<header className="App-header">
						<h1 className="App-title is-size-3">
							<span className="logo">
								<i className="fas fa-shield-virus" />
							</span>
							COVID-19
						</h1>
					</header>
				</div>
			</section>
		</div>
	);
};

export default header;
