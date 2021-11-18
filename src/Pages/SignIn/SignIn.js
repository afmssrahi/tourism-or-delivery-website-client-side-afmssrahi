import { Button, Col, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignIn = () => {
	const { signInUsingGoogle, setError, setUser, setIsLoading, error } =
		useAuth();

	const location = useLocation();
	const history = useHistory();
	const redirect_url = location.state?.from || '/home';

	const handleGoogleSignIn = () => {
		signInUsingGoogle()
			.then((result) => {
				setUser(result.user);
				setError('');
				history.push(redirect_url);
			})
			.catch((error) => {
				setError(error.message);
			})
			.finally(() => setIsLoading(false));
	};

	return (
		<Container
			style={{
				height: '70vh',
				marginTop: '90px',
			}}
			className='fw-bold d-flex justify-content-center align-items-center'
		>
			<Col
				style={{
					backgroundColor: 'rgb(228, 255, 220)',
				}}
				className='col-md-4 p-5 shadow-sm border border-1 border-success rounded-3'
			>
				<h2 className='highlighted-heading'>Sign In</h2>
				<p className='text-danger'>{error}</p>
				<Button
					onClick={handleGoogleSignIn}
					variant='outline-dark fw-bold my-3 fs-5'
				>
					<i className='fab fa-google text-danger'></i> Sign in with
					Google
				</Button>
			</Col>
		</Container>
	);
};

export default SignIn;
