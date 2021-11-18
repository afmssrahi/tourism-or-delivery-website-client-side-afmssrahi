import React from 'react';
import { Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
	const { _id, name, image, description, duration, groupSize, price } =
		service;
	return (
		<div>
			<Col className='text-start p-3 service-card rounded-3'>
				<Image src={image} fluid rounded></Image>
				<h5 className='mt-3'>{name}</h5>
				<div className='d-flex justify-content-between align-items-center mt-3 fw-bold'>
					<div className='d-flex align-items-center'>
						<p>
							<i className='fas fa-calendar-alt fs-2 me-2 highlighted-heading'></i>
						</p>
						<p>
							Duration <br /> {duration}
						</p>
					</div>
					<div className='d-flex align-items-center'>
						<p>
							<i className='fas fa-user fs-2 me-2 highlighted-heading'></i>
						</p>
						<p>
							Group Size <br /> {groupSize}
						</p>
					</div>
				</div>
				<p className='mt-3'>
					{description.slice(0, 150)}
					<span>...</span>
				</p>
				<div className='d-flex justify-content-between mt-3'>
					<h4>{price}</h4>
					<Link to={`/booking/${_id}`}>
						<button className='btn btn-primary'>
							Add To Booking
						</button>
					</Link>
				</div>
			</Col>
		</div>
	);
};

export default Service;
