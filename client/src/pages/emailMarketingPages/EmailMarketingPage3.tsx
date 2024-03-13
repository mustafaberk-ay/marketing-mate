import { useAuth0 } from '@auth0/auth0-react';
import Navbar from '../../components/Navbar';
import NotLoggedIn from '../../components/NotLoggedIn';
import bottleImage from '/bottle.png';
import generateImage from '/generate.png';
import PrevStepButton from '../../components/PrevStepButton';
import NextStepButton from '../../components/NextStepButton';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setGeneratedImageUrl } from '../../redux/slices/productDetailsSlice';

interface PostData {
	userMessage: string;
	imagePrompt: string;
	imageStyle: string;
}

function EmailMarketingPage3() {
	const { isAuthenticated } = useAuth0();

	const dispatch = useDispatch();
	const productInfo = useSelector((state: RootState) => state.productDetails);

	const [imageDetails, setImageDetails] = useState<string>('');
	const [imageStyle, setImageStyle] = useState<string>('vivid');

	function imageDetailsInputOnChange(
		e: React.ChangeEvent<HTMLTextAreaElement>
	) {
		setImageDetails(e.target.value);
	}

	function imageStyleInputOnChange(e: React.ChangeEvent<HTMLInputElement>) {
		setImageStyle(e.target.value);
	}

	async function generateButtonOnClick() {
		const reqBody: PostData = {
			userMessage: `platform: Instagram,
				action:create a post, 
				parameters: 
				productName: ${productInfo.productName}, 
				keyFeatures: ${productInfo.productFeatures}, 
				tone: ${productInfo.contentTone}, 
				targetAudience: ${productInfo.targetAudience}`,
			imagePrompt: imageDetails,
			imageStyle: imageStyle,
		};

		const res = await fetch(
			'http://localhost:3000/imageGeneration/generateImage',
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(reqBody),
			}
		);

		console.log(res.status, 'generate image res status');
		console.log(await res.json());

		//TODO: dispatch: setImageUrl to the response from imageGeneration endpoint
		dispatch(
			setGeneratedImageUrl(
				'https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg'
			)
		);
	}

	return (
		<div>
			{isAuthenticated ? (
				<div>
					<Navbar />

					<div className='flex flex-col justify-around h-screen pl-10 pr-10'>
						<div className='flex justify-between'>
							<div className='text-white text-3xl'>
								Step 3: Image Generation
							</div>
							<div className='font-semibold mr-80 text-white text-center text-5xl'>
								Email Marketing
							</div>
							<div></div>
						</div>

						<div className='text-lightBrown text-center text-2xl'>
							It is <b className='underline italic'>optional</b> but effective
							to input the image details you would like.
						</div>

						<div className='flex justify-around'>
							<label className='text-white text-5xl font-bold'>
								Image Details:
							</label>
							<textarea
								className='border-4 bg-darkBlue text-white border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-3/5 px-2 text-2xl'
								wrap='soft'
								placeholder='Enter details to guide the creation of an image.'
								onChange={imageDetailsInputOnChange}
							></textarea>

							<div className='flex items-center space-x-8 bg-lightBrown px-5 rounded-50'>
								<div className='space-x-2'>
									<input
										type='radio'
										defaultChecked
										name='style'
										value='vivid'
										onChange={imageStyleInputOnChange}
										className='form-radio h-5 w-5'
									/>
									<label className='text-white'>Vivid</label>
								</div>

								<div className='space-x-2'>
									<input
										type='radio'
										name='style'
										value='natural'
										onChange={imageStyleInputOnChange}
										className='form-radio h-5 w-5'
									/>
									<label className='text-white'>Natural</label>
								</div>
							</div>
						</div>

						<div className='flex justify-center'>
							<img
								className='h-80'
								src={bottleImage}
							/>
						</div>

						<div className='text-lightBrown text-center text-2xl'>
							If you are pleased with the current generated image, click on
							"Next Step".
						</div>

						<div className='flex justify-between'>
							<PrevStepButton prevStepPath='/email-marketing-2' />
							<button
								onClick={generateButtonOnClick}
								className='flex items-center justify-around bg-lightBrown text-white py-5 rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110'
							>
								<img
									className='h-8'
									src={generateImage}
								/>
								Generate Image
							</button>
							<NextStepButton nextStepPath='/email-marketing-4' />
						</div>
						<div></div>
						<div></div>
					</div>
				</div>
			) : (
				<NotLoggedIn />
			)}
		</div>
	);
}

export default EmailMarketingPage3;
