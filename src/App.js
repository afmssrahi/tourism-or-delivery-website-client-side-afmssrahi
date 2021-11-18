import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AddTour from './Pages/AddTour/AddTour';
import Home from './Pages/Home/Home/Home';
import ManageBookings from './Pages/ManageBookings/ManageBookings';
import MyBookings from './Pages/MyBookings/MyBookings';
import NotFound from './Pages/NotFound/NotFound';
import PlaceBooking from './Pages/PlaceBooking/PlaceBooking';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SignIn from './Pages/SignIn/SignIn';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
	return (
		<div className='App'>
			<AuthProvider>
				<BrowserRouter>
					<Header></Header>
					<Switch>
						<Route exact path='/'>
							<Home></Home>
						</Route>
						<Route path='/home'>
							<Home></Home>
						</Route>
						<PrivateRoute path='/mybookings'>
							<MyBookings></MyBookings>
						</PrivateRoute>
						<PrivateRoute path='/managebookings'>
							<ManageBookings></ManageBookings>
						</PrivateRoute>
						<PrivateRoute path='/addtour'>
							<AddTour></AddTour>
						</PrivateRoute>
						<Route path='/signin'>
							<SignIn></SignIn>
						</Route>
						<PrivateRoute path='/booking/:id'>
							<PlaceBooking></PlaceBooking>
						</PrivateRoute>
						<Route path='*'>
							<NotFound></NotFound>
						</Route>
					</Switch>
					<Footer></Footer>
				</BrowserRouter>
			</AuthProvider>
		</div>
	);
}

export default App;
