import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
	return (
		<Container
			className='bg-dark p-5 text-center footer text-light footer'
			fluid
		>
			<Row xs={1} md={3} className='d-flex align-items-start'>
				<Col>
					<h4>
						{' '}
						<span className='text-primary'>Travel</span>
						<span className='text-warning'>Bari</span>
					</h4>

					<p className='mt-4 text-muted'>
						We’ve helped more than 200,000 people of all ages enjoy
						the best outdoor experience of their lives. Whether it’s
						for one day or a two-week vacation, close to home or a
						foreign land and something like that.
					</p>
				</Col>
				<Col className='text-primary' l>
					<h4 className='mb-3'>Pages</h4>
					<Link to='/home'>Home</Link>
					<br />
					<Link to='/mybookings'>My Bookings</Link>
					<br />
					<Link to='/signin'>Sign In</Link>
					<br />
				</Col>
				<Col className='text-primary'>
					<h4 className='mb-3'>Our Info</h4>
					<Link to='/home'>Privacy policy</Link>
					<br />
					<Link to='/home'>Terms and condition</Link>
					<br />
					<Link to='/home'>Pricing</Link>
				</Col>
			</Row>
			<p className='text-light fw-bold mt-5'>
				TravelBari &copy; 2021. All Rights Reserved.
			</p>
		</Container>
	);
};

export default Footer;
