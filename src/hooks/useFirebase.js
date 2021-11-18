import {
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
	// states
	const [user, setUser] = useState({});
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	// firebase auth
	const auth = getAuth();

	// Google auth provider
	const googleProvider = new GoogleAuthProvider();

	// sign in using google
	const signInUsingGoogle = () => {
		setIsLoading(true);
		setError('');
		return signInWithPopup(auth, googleProvider);
	};

	// user log out
	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.catch((error) => {})
			.finally(() => setIsLoading(false));
	};
	// Onauth state change
	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});
		return () => unsubscribed;
	}, []);

	return {
		user,
		error,
		isLoading,
		setUser,
		setError,
		setIsLoading,
		signInUsingGoogle,
		logOut,
	};
};

export default useFirebase;
