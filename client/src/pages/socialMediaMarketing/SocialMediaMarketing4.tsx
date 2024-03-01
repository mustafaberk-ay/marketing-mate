import { useAuth0 } from '@auth0/auth0-react';
import NotLoggedIn from '../../components/NotLoggedIn';
import Navbar from '../../components/Navbar';
import { useDispatch } from 'react-redux';
import { FBAuthResponse } from '../../type';
import { setFacebookUserAccessToken } from '../../redux/slices/userInfoSlice';
import loginImage from '/login.png';
import shareImage from '/share.png';
import PrevStepButton from '../../components/PrevStepButton';
import CompleteButton from '../../components/CompleteButton';

function SocialMediaMarketing4() {
	const { isAuthenticated } = useAuth0();
	const dispatch = useDispatch();

	const logInToFB = () => {
		window.FB.login(
			(response: { authResponse?: FBAuthResponse }) => {
				dispatch(
					setFacebookUserAccessToken(response.authResponse?.accessToken || '')
				);
			},
			{
				scope:
					'instagram_basic,pages_show_list,pages_manage_engagement,pages_manage_posts,pages_read_engagement,business_management,instagram_content_publish',
			}
		);
	};

	function sharePostButtonOnClick() {
		console.log('sharePostButtonOnClick');
	}

	return (
		<div>
			{isAuthenticated ? (
				<div>
					<Navbar />
					<div className='flex flex-col space-y-4 pl-10 pr-10 pt-2'>
						<div className='font-semibold text-white text-center text-5xl'>
							Social Media Marketing
						</div>

						<div className='text-white text-3xl '>Step 4: Share Post</div>
						<div className='text-white text-2xl ml-80 pt-10'>Platforms</div>

						<div className='flex space-x-28 justify-center'>
							<div className=' flex justify-around items-center bg-darkBrown text-white py-5 rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110 space-x-4'>
								<label className='text-white text-3xl'>Facebook</label>
								<input
									type='checkbox'
									className='form-checkbox h-6 w-6 mt-2 '
								/>
							</div>
							<div className='flex justify-around items-center bg-darkBrown text-white py-5 rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110'>
								<label className='text-white text-3xl'>Instagram</label>
								<input
									type='checkbox'
									className='form-checkbox h-6 w-6 mt-2 '
								/>
							</div>
						</div>

						<div className='text-lightBrown text-center text-2xl pt-10'>
							You need to login to Facebook first to share a post.
						</div>

						<div className='flex justify-center space-x-28'>
							<button
								className='flex justify-around items-center bg-darkBrown text-white py-5 rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110'
								onClick={logInToFB}
							>
								<img
									className='h-8'
									src={loginImage}
								/>
								Login to <br /> Facebook
							</button>
							<button
								className='flex justify-around items-center bg-darkBrown text-white py-5 rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110'
								onClick={sharePostButtonOnClick}
							>
								<img
									className='h-8'
									src={shareImage}
								/>
								Share Post
							</button>
						</div>

						<div className='flex justify-between pt-9'>
							<PrevStepButton prevStepPath='/social-media-marketing-3' />
							<CompleteButton />
						</div>
					</div>
				</div>
			) : (
				<NotLoggedIn />
			)}
		</div>
	);
}

export default SocialMediaMarketing4;
