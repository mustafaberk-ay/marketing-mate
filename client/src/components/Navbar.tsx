import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<div className='bg-darkBrown py-4'>
			<div className='container mx-auto flex items-center justify-between px-4'>
				<div>
					<Link
						to='/'
						className='text-white text-2xl font-bold'
					>
						Marketing Mate
					</Link>
				</div>
				<div>
					<Link
						to='/home-page'
						className='text-white hover:text-gray-300 px-3'
					>
						Home
					</Link>
					<Link
						to='/social-media-marketing-1'
						className='text-white hover:text-gray-300 px-3'
					>
						Social Media Marketing
					</Link>
					<Link
						to='/home-page'
						className='text-white hover:text-gray-300 px-3'
					>
						Message Marketing
					</Link>
					<Link
						to='/home-page'
						className='text-white hover:text-gray-300 px-3'
					>
						Email Marketing
					</Link>
					<Link
						to='/home-page'
						className='text-white hover:text-gray-300 px-3'
					>
						Cold Calling
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
