import React from 'react';
import { Col, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Banner.css';

const Banner = () => {
	return (
		<Container
			className='banner-container d-flex justify-content-sm-start align-items-center text-muted'
			fluid
		>
			<Col className='col-md-4'>
				<h1 className=''>
					Travel Makes One Modest, You See What a Tiny Place You
					Occupy In The World.
				</h1>
				<button className='custom-btn text-white'>
					<Nav.Link as={NavLink} to='/addtour'>
						Add Tour
					</Nav.Link>
				</button>
			</Col>
		</Container>
	);
};

export default Banner;
