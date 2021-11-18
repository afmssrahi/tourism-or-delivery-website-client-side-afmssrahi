import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import aboutImg from './../../../images/aboutUs.jpg';

const AboutUs = () => {
	return (
		<Container className='mt-3'>
			<h4 className='highlighted-heading'>About us</h4>
			<h1 className='text-muted'>We Always With You</h1>
			<Row md={2} xs={1} className='text-start mt-3'>
				<Col className='mt-4'>
					<h3 className='my-3'>Why Choose Us</h3>

					<div className='d-flex'>
						<i className='fas fa-star fs-1 me-3 highlighted-heading'></i>
						<div>
							<p>
								Sleep and Travel
								<br /> in Comfort
							</p>
						</div>
					</div>
					<div className='d-flex'>
						<i className='fas fa-star fs-1 me-3 highlighted-heading'></i>
						<div>
							<p>
								Booking <br /> With Spread Payment
							</p>
						</div>
					</div>
					<div className='d-flex'>
						<i className='fas fa-star fs-1 me-3 highlighted-heading'></i>
						<div>
							<p>
								Fully Licensed <br /> Tour Operator
							</p>
						</div>
					</div>
					<p className='mt-4 text-muted'>
						We’ve helped more than 200,000 people of all ages enjoy
						the best outdoor experience of their lives. Whether it’s
						for one day or a two-week vacation, close to home or a
						foreign land and something like that.
					</p>
				</Col>
				<Col>
					<Image
						className='mt-5'
						src={aboutImg}
						rounded
						fluid
					></Image>
				</Col>
			</Row>
		</Container>
	);
};

export default AboutUs;
