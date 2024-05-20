import { useAuth0 } from '@auth0/auth0-react';
import NotLoggedIn from '../../components/NotLoggedIn';
import Navbar from '../../components/Navbar';
import { FBAuthResponse } from '../../type';
import loginImage from '/login.png';
import shareImage from '/share.png';
import PrevStepButton from '../../components/PrevStepButton';
import CompleteButton from '../../components/CompleteButton';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface FBResponse<T = any> {
	data?: T[];
	link?: string;
	username?: string;
	id?: string;
}

interface FBPage {
	id: string;
	access_token: string;
}

function SocialMediaMarketing4() {
	const { isAuthenticated } = useAuth0();
	const productInfo = useSelector((state: RootState) => state.productDetails);

	const [facebookUserAccessToken, setFacebookUserAccessToken] =
		useState<string>('');
	const [isPostingFacebook, setIsPostingFacebook] = useState<boolean>(false);
	const [isPostingInstagram, setIsPostingInstagram] = useState<boolean>(false);

	const logInToFB = () => {
		window.FB.login(
			(response: { authResponse?: FBAuthResponse }) => {
				setFacebookUserAccessToken(response.authResponse?.accessToken || '');
			},
			{
				scope:
					'instagram_basic,pages_show_list,pages_manage_engagement,pages_manage_posts,pages_read_engagement,business_management,instagram_content_publish',
			}
		);
	};

	const getFacebookPages = (): Promise<FBPage[]> => {
		return new Promise((resolve) => {
			window.FB.api(
				'me/accounts',
				{ access_token: facebookUserAccessToken },
				(response: FBResponse) => {
					resolve(response.data || []);
				}
			);
		});
	};

	const getInstagramAccountId = (facebookPageId: string): Promise<string> => {
		return new Promise((resolve) => {
			window.FB.api(
				`${facebookPageId}?fields=instagram_business_account`,
				{ access_token: facebookUserAccessToken },
				(response: { instagram_business_account: { id: string } }) => {
					resolve(response.instagram_business_account.id);
				}
			);
		});
	};

	const createMediaObjectContainer = (
		instagramAccountId: string
	): Promise<string> => {
		return new Promise((resolve) => {
			window.FB.api(
				`${instagramAccountId}/media`,
				'POST',
				{
					access_token: facebookUserAccessToken,
					image_url: productInfo.generatedImageUrl,
					caption: productInfo.generatedContent,
				},
				(response: { id: string }) => {
					resolve(response.id);
				}
			);
		});
	};

	const publishMediaObjectContainer = (
		instagramAccountId: string,
		mediaObjectContainerId: string
	): Promise<string> => {
		return new Promise((resolve) => {
			window.FB.api(
				`${instagramAccountId}/media_publish`,
				'POST',
				{
					access_token: facebookUserAccessToken,
					creation_id: mediaObjectContainerId,
				},
				(response: { id: string }) => {
					resolve(response.id);
				}
			);
		});
	};

	const shareInstagramPost = async () => {
		try {
			const facebookPages = await getFacebookPages();
			if (facebookPages[0].id) {
				const instagramAccountId = await getInstagramAccountId(
					facebookPages[0].id
				);
				const mediaObjectContainerId = await createMediaObjectContainer(
					instagramAccountId
				);
				const response = await publishMediaObjectContainer(
					instagramAccountId,
					mediaObjectContainerId
				);
				return response
			}
		} catch (error) {
			console.error(error);
		}
	};

	const shareFacebookPost = async () => {
		try {
			const facebookPages = await getFacebookPages();
			const facebookPageId = facebookPages[0].id;
			const pageToken = facebookPages[0].access_token;
	
			const responseId = await new Promise((resolve, reject) => {
				window.FB.api(
					`${facebookPageId}/feed`,
					'POST',
					{
						access_token: pageToken,
						link: productInfo.generatedImageUrl,
						message: productInfo.generatedContent,
					},
					(response: {id: string}) => {
						if (response && response.id) {
							resolve(response.id);
						} else {
							reject(new Error('Failed to post on Facebook'));
						}
					}
				);
			});
	
			return responseId;
		} catch (error) {
			console.error(error);
			throw error;
		}
	};
	

	function isPostingFacebookOnChange(e: React.ChangeEvent<HTMLInputElement>) {
		setIsPostingFacebook(e.target.checked);
	}

	function isPostingInstagramOnChange(e: React.ChangeEvent<HTMLInputElement>) {
		setIsPostingInstagram(e.target.checked);
	}

	async function sharePostButtonOnClick() {
		console.log('sharePostButtonOnClick');

		if (isPostingFacebook) {
			const facebookResponseId = await shareFacebookPost();
			if(facebookResponseId)
            alert(`Facebook post shared successfully`, );
		}

		if (isPostingInstagram) {
			const instagramResponseId = await shareInstagramPost();
			if(instagramResponseId)
			alert(`Instagram post shared successfully`)
		}
	}

	return (
		<div>
			{isAuthenticated ? (
				<div>
					<Navbar />
					<div className='flex flex-col justify-around h-screen pl-10 pr-10'>
						<div className='font-semibold text-white text-center text-5xl'>
							Social Media Marketing
						</div>

						<div className='text-white text-3xl '>Step 4: Share Post</div>
						<div className='text-white text-2xl '>Platforms</div>

						<div className='flex space-x-28 justify-center'>
							<div className=' flex justify-around items-center bg-darkBrown text-white rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110 space-x-4'>
								<label className='text-white text-3xl'>Facebook</label>
								<input
									type='checkbox'
									className='form-checkbox h-6 w-6'
									onChange={isPostingFacebookOnChange}
								/>
							</div>
							<div className='flex justify-around items-center bg-darkBrown text-white rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110'>
								<label className='text-white text-3xl'>Instagram</label>
								<input
									type='checkbox'
									className='form-checkbox h-6 w-6'
									onChange={isPostingInstagramOnChange}
								/>
							</div>
						</div>

						<div className='text-lightBrown text-center text-2xl'>
							You need to login to Facebook first to share a post.
						</div>

						<div className='flex justify-center space-x-28'>
							{facebookUserAccessToken ? (
								<button
									className='flex justify-around items-center bg-darkBrown text-white rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110'
									onClick={sharePostButtonOnClick}
								>
									<img
										className='h-8'
										src={shareImage}
									/>
									Share Post
								</button>
							) : (
								<button
								className='flex justify-around items-center bg-darkBrown text-white rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110'
								onClick={logInToFB}
							>
								<img
									className='h-8'
									src={loginImage}
								/>
								Login to <br /> Facebook
							</button>
							)}
						</div>

						<div className='flex justify-between'>
							{productInfo.isRequestedImage ? (
								<PrevStepButton prevStepPath='/social-media-marketing-3' />
							) : (
								<PrevStepButton prevStepPath='/social-media-marketing-2' />
							)}
							<CompleteButton />
						</div>
						<div></div>
					</div>
				</div>
			) : (
				<NotLoggedIn />
			)}
		</div>
	);
}

export default SocialMediaMarketing4;
