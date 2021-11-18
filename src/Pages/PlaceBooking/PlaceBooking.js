import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PlaceBooking.css';

const PlaceBooking = () => {
	const { register, handleSubmit, reset } = useForm();
	const { user } = useAuth();

	const [service, setService] = useState({});
	const { id } = useParams();

	const { name, description, image, price, rating, location } = service;

	useEffect(() => {
		const url = `https://young-eyrie-64959.herokuapp.com/services/${id}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setService(data));
	}, []);

	const onSubmit = (data) => {
		data.bookedTour = service;
		data.status = 'pending';
		fetch('https://young-eyrie-64959.herokuapp.com/bookings', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.insertedId) {
					alert('Tour booked Successfully');
					reset();
				}
			});
	};

	return (
		<Container style={{ marginTop: '90px' }} className='mb-5 text-start'>
			<h1 className='text-center mb-5'>Tour Details</h1>
			<Row md={2} xs={1} className='g-4'>
				<Col className='p-3'>
					<Image src={image} rounded fluid></Image>
					<h4 className=''>{name}</h4>
					<div className='d-flex justify-content-between align-items-center mt-3 fw-bold'>
						<div className=''>
							<h5>
								Price <br /> {price}
							</h5>
						</div>
						<div className=''>
							<p className='m-0'>Rating</p>
							<Rating
								className='text-warning'
								initialRating={rating}
								emptySymbol='far fa-star'
								fullSymbol='fas fa-star'
								readonly
							></Rating>
						</div>
					</div>
					<p>{description}</p>
					<h5>{location}</h5>
				</Col>
				<Col className='col-md-6 mx-auto'>
					<h2 className='text-muted mt-3'>
						Please Provide Necessary Information
					</h2>
					<form
						className='booking-form'
						onSubmit={handleSubmit(onSubmit)}
					>
						<input
							defaultValue={user.displayName}
							{...register('name')}
							required
						/>
						<input
							defaultValue={user.email}
							{...register('email', { required: true })}
						/>
						<input
							placeholder='Address'
							defaultValue=''
							{...register('address')}
							required
						/>
						<input
							placeholder='Phone number'
							defaultValue=''
							{...register('phone')}
							required
						/>

						<input
							type='submit'
							className='custom-btn'
							value='Book Now'
						/>
					</form>
				</Col>
			</Row>
		</Container>
	);
};

export default PlaceBooking;
