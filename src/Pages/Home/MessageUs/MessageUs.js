import React from 'react';
import { Container } from 'react-bootstrap';
import './MessageUs.css';

const MessageUs = () => {
	return (
		<Container
			className='messageUs-container d-flex justify-content-center align-items-center my-5 text-light'
			fluid
		>
			<div className='text-primary'>
				<h4 className='highlighted-heading'>Subscribe</h4>
				<h1 className='text-muted'>Quick Connect</h1>
				<input type='text' placeholder='your name' />
				<input type='email' name='' id='' placeholder='your email' />
				<button className='custom-btn mt-3'>Subscribe</button>
			</div>
		</Container>
	);
};

export default MessageUs;
