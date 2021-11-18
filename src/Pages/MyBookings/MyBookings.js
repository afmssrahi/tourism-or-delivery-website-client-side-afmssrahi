import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Booking from '../Booking/Booking';

const MyBookings = () => {
	const { user } = useAuth();
	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		const url = `https://young-eyrie-64959.herokuapp.com/bookings/${user.email}`;
		fetch(url)
			.then((res) => res.json())
			.then((data) => setBookings(data));
	}, [user.email]);

	const handleDeleteBooking = (id) => {
		const proceed = window.confirm('Are you sure you want to delete');
		if (proceed) {
			const url = `https://young-eyrie-64959.herokuapp.com/bookings/${id}`;
			fetch(url, {
				method: 'DELETE',
			})
				.then((res) => res.json())
				.then((result) => {
					if (result.deletedCount === 1) {
						alert('Booking Deleted SuccessFully');
						const remaining = bookings.filter(
							(booking) => booking._id !== id
						);
						setBookings(remaining);
					}
				});
		}
	};
	return (
		<Container>
			{!bookings.length ? (
				<h3
					style={{ height: '70vh' }}
					className=' mt-5 d-flex align-items-center justify-content-center'
				>
					Here is no booked. <br /> Please go to home page and add
					Book.
				</h3>
			) : (
				<div style={{ marginTop: '90px' }}>
					<h1 className='mb-3'>My Bookings</h1>
					{bookings.map((booking) => (
						<Booking
							key={booking._id}
							bookingId={booking._id}
							status={booking.status}
							bookedTour={booking.bookedTour}
							handleDeleteBooking={handleDeleteBooking}
						></Booking>
					))}
				</div>
			)}
		</Container>
	);
};

export default MyBookings;
