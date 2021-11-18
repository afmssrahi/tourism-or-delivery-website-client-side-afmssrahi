import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import ScaleLoader from 'react-spinners/ScaleLoader';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
	const [services, setServices] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		fetch('https://young-eyrie-64959.herokuapp.com/services')
			.then((res) => res.json())
			.then((data) => {
				setServices(data);
				setLoading(false);
			});
	}, []);

	return (
		<Container id='tours' className='mt-5'>
			{loading ? (
				<div
					style={{ height: '100vh' }}
					className='d-flex align-items-center justify-content-center'
				>
					<ScaleLoader
						color={'dodgerblue'}
						loading={loading}
						size={30}
					/>
				</div>
			) : (
				<div>
					<h4 className='highlighted-heading'>Our Services</h4>
					<h1 className='text-muted'>Our Services, Your Deals</h1>
					<Row md={2} lg={2} className='g-4'>
						{services.map((service) => (
							<Service
								key={service._id}
								service={service}
							></Service>
						))}
					</Row>
				</div>
			)}
		</Container>
	);
};

export default Services;
