import React, {Component} from 'react';
import {Line} from 'react-chartjs-2';

class Chart extends Component {
	// prettier-ignore
	constructor(props) {
		super(props);
		this.state = {
			chartData: props.chartData
		};
    }

	static defaultProps = {
		displayTitle: true,
		displayLegend: true,
		legendPosition: 'right',
		location: 'Country'
	};

	render() {
		return (
			<div className="Chart">
				<Line
					height={300}
					data={this.state.chartData}
					options={{
						title: {
							display: this.props.displayTitle,
							text: 'Confirmed cases in ' + this.props.location,
							fontSize: 14
						},
						legend: {
							display: this.props.displayLegend,
							position: this.props.legendPosition
						}
					}}
				/>
			</div>
		);
	}
}

export default Chart;
