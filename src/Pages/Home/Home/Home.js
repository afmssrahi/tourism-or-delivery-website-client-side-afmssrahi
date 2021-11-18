import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import MessageUs from '../MessageUs/MessageUs';
import Services from '../Services/Services';

const Home = () => {
	return (
		<div>
			<div>
				<Banner></Banner>
				<Services></Services>
				<AboutUs></AboutUs>
				<MessageUs></MessageUs>
			</div>
		</div>
	);
};

export default Home;
