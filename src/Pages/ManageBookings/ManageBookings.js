import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import ManageBooking from '../ManageBooking/ManageBooking';

const ManageBookings = () => {
	const [bookings, setBookings] = useState([]);

	useEffect(() => {
		fetch('https://young-eyrie-64959.herokuapp.com/bookings')
			.then((res) => res.json())
			.then((data) => setBookings(data));
	}, []);

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

	const handleUpdateStatus = (id) => {
		const url = `https://young-eyrie-64959.herokuapp.com/bookings/${id}`;
		fetch(url, {
			method: 'PUT',
			headers: {
				'content-type': 'application/json',
			},
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.modifiedCount > 0) {
					alert('Booking Aproved');
					window.location.reload();
				}
			});
	};
	return (
		<Container>
			{!bookings.length ? (
				<h3
					style={{ height: '70vh' }}
					className=' mt-5 d-flex align-items-center justify-content-center'
				>
					No booking added by any user.
				</h3>
			) : (
				<div style={{ marginTop: '90px' }}>
					<h1 className='mb-3'>All Users Bookings</h1>
					{bookings.map((booking) => (
						<ManageBooking
							key={booking._id}
							bookingId={booking._id}
							status={booking.status}
							bookedTour={booking.bookedTour}
							handleDeleteBooking={handleDeleteBooking}
							handleUpdateStatus={handleUpdateStatus}
						></ManageBooking>
					))}
				</div>
			)}
		</Container>
	);
};

export default ManageBookings;
