import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddTour.css';

const AddTour = () => {
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data) => {
		fetch('https://young-eyrie-64959.herokuapp.com/services', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.then((result) => {
				if (result.insertedId) {
					alert('Tour added successfully');
					reset();
				}
			});
	};
	return (
		<Container
			style={{ marginTop: '90px' }}
			className='add-tour col-md-6 mx-auto mb-3'
		>
			<h2 className=''>Add a tour.</h2>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='row'>
					<div className='col-sm-12 col-md-6'>
						<input
							{...register('name', {
								required: true,
								maxLength: 20,
							})}
							placeholder='Name'
							required
						/>
						<input
							{...register('image')}
							placeholder='Image url'
							required
						/>
						<textarea
							{...register('description')}
							placeholder='Description'
							required
						/>
						<input
							{...register('price')}
							placeholder='$ Price'
							required
						/>
					</div>
					<div className='col-sm-12 col-md-6'>
						<input
							{...register('location')}
							placeholder='Location(city, country)'
							required
						/>
						<input
							type='number'
							{...register('rating')}
							placeholder='Rating out of Five'
							required
						/>
						<input
							{...register('duration')}
							placeholder='Duration(days)'
							required
						/>
						<input
							{...register('groupSize')}
							placeholder='Group Size(people)'
							required
						/>
					</div>
					<input
						type='submit'
						className='custom-btn'
						value='Add Tour'
					/>
				</div>
			</form>
		</Container>
	);
};

export default AddTour;
