import React, { useEffect, useState } from 'react';
// import './App.css'
import './Content.css';

function Content(props) {
	const [city, setCity] = useState(null);
	const [search, setSearch] = useState();

	useEffect(() => {
		const fetchApi = async () => {
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&units=metric&APPID=ac0079cfaafd49d9f6f8b4ceef1c76fb`;
			const response = await fetch(url);
			const dataJson = await response.json();
			// console.log(dataJson);
			console.log('first', dataJson);
			setCity(dataJson.main);
		};

		fetchApi();
	}, [search]);

	return (
		<>
			<div className='container'>
				<div className='row'>
					<div className='col-md-5 col-14 mx-auto text-centre'>
						<div className='content text-centre'>
							<h1> Weather App </h1>
							<hr />
							<input
								type='search'
								className='inputFeild'
								placeholder='Enter city name'
								onChange={(event) => {
									setSearch(event.target.value);
								}}
							/>
							<hr />
							{!city ? (
								<p>No Data Found </p>
							) : (
								<div>
									<h2 className='place'> {search}</h2>
									<h2 className='temp'>Temp {city.temp}°C </h2>
									<h2 className='min_max_temp'>min {city.temp_min}°C </h2>
									<h2 className='min_max_temp'>max {city.temp_max}°C </h2>
								</div>
							)}
						</div>
						<h1>By Ramashish Pandey .</h1>
					</div>
				</div>
			</div>
		</>
	);
}

export default Content;
