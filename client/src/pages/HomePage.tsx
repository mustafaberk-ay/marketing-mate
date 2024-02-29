import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { useAuth0 } from '@auth0/auth0-react';
import Navbar from '../components/Navbar';
import NotLoggedIn from '../components/NotLoggedIn';
import { Link } from 'react-router-dom';

function HomePage() {
	const dispatch = useDispatch();
	const userInfo = useSelector((state: RootState) => state.user);
	const { isAuthenticated } = useAuth0();

	return (
		<div>
			{isAuthenticated ? (
				<div>
					<Navbar />
					<div className='text-5xl font-semibold text-white text-center mt-10'>
						Get Started
					</div>

					<div className='flex justify-center space-x-8 mt-10'>
						<div className='flex flex-col items-center mt-10 space-y-8'>
							<Link
								className='text-center bg-darkBrown text-white py-2 px-4 rounded-50 w-96 h-24 text-3xl transition-transform hover:scale-110'
								to='/'
							>
								Social Media
								<br /> Marketing
							</Link>

							<Link
								className='text-center bg-darkBrown text-white py-2 px-4 rounded-50 w-96 h-24 text-3xl transition-transform hover:scale-110'
								to='/'
							>
								Message <br />
								Marketing
							</Link>
						</div>
						<div className='flex flex-col items-center mt-10 space-y-8'>
							<Link
								className='text-center bg-darkBrown text-white py-2 px-4 rounded-50 w-96 h-24 text-3xl transition-transform hover:scale-110'
								to='/'
							>
								Email <br />
								Marketing
							</Link>
							<Link
								className='text-center bg-darkBrown text-white py-2 px-4 rounded-50 w-96 h-24 text-3xl transition-transform hover:scale-110'
								to='/'
							>
								Cold <br />
								Calling
							</Link>
						</div>
					</div>
				</div>
			) : (
				<NotLoggedIn />
			)}
		</div>
	);
}

export default HomePage;
