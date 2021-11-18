import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
	const { user, logOut } = useAuth();

	return (
		<Navbar
			style={{ backgroundColor: '#e4ffdc' }}
			collapseOnSelect
			expand='lg'
			variant='light fw-bold'
			fixed='top'
		>
			<Container fluid>
				<Navbar.Brand
					as={NavLink}
					to='/home'
					style={{ width: '200px' }}
				>
					<span className='text-primary'>Travel</span>
					<span className='text-warning'>Bari</span>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='responsive-navbar-nav' />
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav className='ms-auto d-flex align-items-center'>
						<Nav.Link as={NavLink} to='/home'>
							Home
						</Nav.Link>
					</Nav>

					{!user.email ? (
						<Nav className='d-flex align-items-center'>
							<Nav.Link as={NavLink} to='/signin'>
								<button className='custom-btn'>SignIn</button>
							</Nav.Link>
						</Nav>
					) : (
						<Nav className='d-flex align-items-center'>
							<Nav.Link as={NavLink} to='/mybookings'>
								My Bookings
							</Nav.Link>
							<Nav.Link as={NavLink} to='/managebookings'>
								Manage All Bookings
							</Nav.Link>
							<Nav.Link as={NavLink} to='/addtour'>
								Add Tour
							</Nav.Link>
							<Nav.Link className='btn btn-warning text-white'>
								Hello, {user.displayName}
							</Nav.Link>
							<Nav.Link>
								<button onClick={logOut} className='custom-btn'>
									Log Out
								</button>
							</Nav.Link>
						</Nav>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
