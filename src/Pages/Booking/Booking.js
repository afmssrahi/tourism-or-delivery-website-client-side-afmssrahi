import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';

const Booking = (props) => {
	const { name, price, image, duration, groupSize } = props.bookedTour;

	return (
		<Row md={1} xs={1} className='text-start my-3'>
			<Col className='d-md-flex'>
				<div>
					<Image
						className='my-booking-img me-3'
						src={image}
						rounded
						fluid
					></Image>
				</div>
				<div>
					<h3>{name}</h3>
					<span>Price: {price}</span>
					<br />
					<span>Duration: {duration}</span>
					<br />
					<span>Group Size: {groupSize}</span>
				</div>
				<div className='ms-md-3'>
					{props.status === 'pending' ? (
						<div className=''>
							<h4 className=' highlighted-heading fw-bold text-warning'>
								Waiting for approval
							</h4>
						</div>
					) : (
						<h4 className='highlighted-heading fw-bold text-success'>
							Approved
						</h4>
					)}
					<button
						onClick={() =>
							props.handleDeleteBooking(props.bookingId)
						}
						className='custom-btn mt-2'
					>
						Delete Booking
					</button>
				</div>
			</Col>
			<hr className='mt-2' />
		</Row>
	);
};

export default Booking;
