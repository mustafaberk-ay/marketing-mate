import { useAuth0 } from '@auth0/auth0-react';
import Navbar from '../../components/Navbar';
import NotLoggedIn from '../../components/NotLoggedIn';
import GoHomePageButton from '../../components/GoHomePageButton';
import NextStepButton from '../../components/NextStepButton';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import {
	setContentTone,
	setIsRequestedImage,
	setProductFeatures,
	setProductName,
	setTargetAudience,
} from '../../redux/slices/productDetailsSlice';

function MessageMarketingPage1() {
	const { isAuthenticated } = useAuth0();
	const dispatch = useDispatch();
	const productInfo = useSelector((state: RootState) => state.productDetails);

	function productNameInputOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		dispatch(setProductName(e.target.value));
	}

	function productFeaturesInputOnChange(
		e: React.ChangeEvent<HTMLTextAreaElement>
	) {
		dispatch(setProductFeatures(e.target.value));
	}

	function targetAudienceInputOnChange(
		e: React.ChangeEvent<HTMLTextAreaElement>
	) {
		dispatch(setTargetAudience(e.target.value));
	}

	function contentToneInputOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		dispatch(setContentTone(e.target.value));
	}

	function isRequestedImageInputOnChange(
		e: React.ChangeEvent<HTMLInputElement>
	) {
		dispatch(setIsRequestedImage(e.target.checked));
	}

	async function nextStepButtonOnClick() {
		interface PostData {
			userMessage: string;
		}

		const reqBody: PostData = {
			userMessage: `platform: Whatsapp,
				action:create a message, 
				parameters: 
				productName: ${productInfo.productName}, 
				keyFeatures: ${productInfo.productFeatures}, 
				tone: ${productInfo.contentTone}, 
				targetAudience: ${productInfo.targetAudience}`,
		};

		const res = await fetch('http://localhost:3000/chatThread/sendMessage', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(reqBody),
		});

		console.log(res.status, 'send message res status');
		console.log(await res.json());
	}

	function IsInputsValid(): boolean {
		if (
			productInfo.productName &&
			productInfo.productFeatures &&
			productInfo.targetAudience &&
			productInfo.contentTone
		)
			return true;
		return false;
	}

	return (
		<div>
			{isAuthenticated ? (
				<div>
					<Navbar />
					<div className='flex flex-col justify-around h-screen pl-10 pr-10'>
						<div className='font-semibold text-white text-center text-5xl'>
							Message Marketing
						</div>

						<div className='text-white text-3xl '>
							Step 1: Product and Message Details
						</div>

						<div className='flex space-x-8'>
							<label className='text-white text-5xl mr-28 font-extrabold'>
								Product Name:
							</label>
							<textarea
								className='border-4 bg-darkBlue text-white border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-3/5 px-2 text-2xl'
								wrap='soft'
								onChange={productNameInputOnChange}
								value={productInfo.productName}
							></textarea>
						</div>

						<div className='flex space-x-8'>
							<label className='text-white text-5xl font-extrabold mr-2'>
								Product's Features:
							</label>
							<textarea
								className='border-4 bg-darkBlue text-white border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-3/5 text-2xl'
								wrap='soft'
								onChange={productFeaturesInputOnChange}
								value={productInfo.productFeatures}
							></textarea>
						</div>

						<div className='flex space-x-8'>
							<label className='text-white text-5xl mr-16 font-extrabold'>
								Target Audience:
							</label>
							<textarea
								className='border-4 bg-darkBlue text-white border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-3/5 text-2xl'
								wrap='soft'
								onChange={targetAudienceInputOnChange}
								value={productInfo.targetAudience}
							></textarea>
						</div>

						<div className='flex space-x-8'>
							<label className='text-white text-5xl mr-32 font-extrabold'>
								Content Tone:
							</label>
							<textarea
								className='border-4 bg-darkBlue text-white border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-3/5 text-2xl'
								wrap='soft'
								onChange={contentToneInputOnChange}
								value={productInfo.contentTone}
							></textarea>
						</div>

						<div className='flex space-x-8'>
							<label className='text-white text-3xl'>
								Would you like an AI-generated image?
							</label>
							<input
								type='checkbox'
								className='form-checkbox h-6 w-6'
								checked={productInfo.isRequestedImage}
								onChange={isRequestedImageInputOnChange}
							/>
						</div>

						<div className='flex justify-between'>
							<GoHomePageButton />
							{IsInputsValid() ? (
								<button onClick={nextStepButtonOnClick}>
									<NextStepButton nextStepPath='/message-marketing-2' />
								</button>
							) : (
								<button
									className='pointer-events-none'
									onClick={nextStepButtonOnClick}
								>
									<NextStepButton nextStepPath='/message-marketing-2' />
								</button>
							)}
						</div>
						<div></div>
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

export default MessageMarketingPage1;
