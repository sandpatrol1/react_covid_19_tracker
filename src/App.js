import React, {Component} from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import CountrySelect from './components/CountrySelect/CountrySelect';
import DataText from './components/DataText/DataText';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import axios from 'axios';
import Chart from './components/Chart/Chart';

class App extends Component {
	// prettier-ignore
	constructor() {
	  super(); 
		this.state = {
			data: [], 
			loadedData: null,
			loadedDataChart: null,
			country: null,
			error: false,
			errorChart: false,
			chartData: {}
		}
	  }

	countryChangeHandler = (event) => {
		this.setState({country: event.target.value});
	};

	// prettier-ignore
	componentDidUpdate(prevProps, prevState) {
		if (this.state.country) {
			if ((this.state.country !== prevState.country)) {
				this.setState({chartData: {}})
				axios.get(`https://covidapi.info/api/v1/country/${this.state.country}/latest`)
					.then((response) => {
						const result = response.data.result;
						const date = Object.keys(result);
						const data = {
							date: date,
							confirmed: result[date].confirmed,
							deaths: result[date].deaths,
							recovered: result[date].recovered
						}
						this.setState({data: data, loadedData: true, error: false})
					})
					.catch((error) => {
						this.setState({error: error, loadedData: false})
					})	
			
				axios.get(`https://covidapi.info/api/v1/country/${this.state.country}`)
					.then((response) => {
						const {result} = response.data;
						const confirmedArr = []
						const lastUpdated = Object.keys(result); // Date of latest data
						for (let i = 0; i < lastUpdated.length; i++) {
							confirmedArr.push(result[lastUpdated[i]].confirmed);
						}

						this.setState({
							chartData: {
								labels: lastUpdated,
								datasets:[
									{
									label:'Confirmed',
									data: confirmedArr,
									backgroundColor:[
										'rgba(255, 99, 132, 0.6)',
										'rgba(54, 162, 235, 0.6)',
										'rgba(255, 206, 86, 0.6)'
									]
									}
								]
							}
						})
						this.setState({loadedDataChart: true, errorChart: false})
						console.log(this.state.chartData)
					 })
					.catch((error) => {
						console.log(error)
						this.setState({errorChart: error, loadedDataChart: false})
					})
			}
				
		}
	}

	render() {
		return (
			<div className="App">
				<Header />
				<div className="columns is-centered col selectcol">
					<div className="column is-three-quarters is-half">
						<CountrySelect changed={this.countryChangeHandler} />
					</div>
				</div>

				{this.state.loadedData || (!this.state.loadedData && this.state.error) ? (
					<div className="columns is-centered col">
						<div className="column is-three-quarters is-half">
							<DataText data={this.state.data} error={this.state.error} />
						</div>
					</div>
				) : null}

				{this.state.loadedDataChart ? (
					<div className="columns is-centered col chartcol">
						<div className="column is-three-quarters is-half">
							<Chart
								chartData={this.state.chartData}
								legendPosition="bottom"
								location={this.state.country}
								key={Math.random()}
							/>
						</div>
					</div>
				) : null}

				<Footer />
			</div>
		);
	}
}

export default App;
