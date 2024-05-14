import { useAuth0 } from '@auth0/auth0-react';
import Navbar from '../../components/Navbar';
import NotLoggedIn from '../../components/NotLoggedIn';
import PrevStepButton from '../../components/PrevStepButton';
import NextStepButton from '../../components/NextStepButton';
import generateImage from '/generate.png';
import { useEffect, useState } from 'react';
import LoadingScreen from '../../components/LoadingScreen';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import {
	setGeneratedContent,
	setGeneratedEmailSubject,
} from '../../redux/slices/productDetailsSlice';

interface apiRes {
	lastMessageText: string;
	lastMessageId: string;
	role: string;
}

function EmailMarketingPage2() {
	const { isAuthenticated } = useAuth0();
	const productInfo = useSelector((state: RootState) => state.productDetails);
	const dispatch = useDispatch();

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [emailContent, setEmailContent] = useState<string>('');
	const [subject, setSubject] = useState<string>('');
	const [generateAgainClickCount, setGenerateAgainClickCount] =
		useState<number>(0);

	useEffect(() => {
		// eslint-disable-next-line prefer-const
		let intervalId: NodeJS.Timeout;

		const fetchData = async () => {
			console.log('fetch data executing');
			const res = await fetch(
				'http://localhost:3000/chatThread/getLastMessage'
			);

			if (res.ok) {
				const data: apiRes = await res.json();
				const splittedStr = data.lastMessageText.split('&&');
				const subject = splittedStr[0];
				const emailContent = splittedStr[1];

				setSubject(subject);
				setEmailContent(emailContent);
				setIsLoading(false);
				clearInterval(intervalId); // Clear interval once the response is successful
			}
		};

		intervalId = setInterval(() => {
			fetchData();
		}, 5000);

		return () => {
			clearInterval(intervalId);
		};
	}, [generateAgainClickCount]);

	async function generateButtonOnClick() {
		setGenerateAgainClickCount((prevCount) => prevCount + 1);

		interface PostData {
			userMessage: string;
		}

		const reqBody: PostData = {
			userMessage: `platform: Gmail,
					action:create an email, 
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

		setIsLoading(true);

		console.log(res.status, 'send message res status');
		console.log(await res.json(), 'res');
	}

	function generatedContentOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setEmailContent(e.target.value);
	}

	function generatedSubjectOnChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
		setSubject(e.target.value);
	}

	function isGeneratedContentValid(): boolean {
		if (emailContent) return true;
		return false;
	}

	function nextStepButtonOnClick() {
		dispatch(setGeneratedContent(emailContent));
		dispatch(setGeneratedEmailSubject(subject));
	}

	return (
		<div>
			{isAuthenticated ? (
				isLoading ? (
					<LoadingScreen />
				) : (
					<div>
						<Navbar />

						<div className='flex flex-col justify-around h-screen pl-10 pr-10'>
							<div className='font-semibold text-white text-center text-5xl'>
								Email Marketing
							</div>

							<div className='text-white text-3xl '>
								Step 2: Email Generation
							</div>

							<div className='flex space-x-8'>
								<label className='text-white text-5xl font-extrabold mr-2'>
									Generated Subject:
								</label>
								<textarea
									className='border-4 border-darkBrown rounded-md focus:outline-none focus:border-lightBrown w-3/5 text-2xl bg-darkBlue text-white'
									value={subject}
									onChange={generatedSubjectOnChange}
								></textarea>
							</div>

							<div className='flex space-x-8'>
								<label className='text-white text-5xl font-extrabold mr-12'>
									Generated Email:
								</label>
								<textarea
									className='border-4 border-darkBrown h-64 rounded-md focus:outline-none focus:border-lightBrown w-3/5 text-2xl bg-darkBlue text-white'
									value={emailContent}
									onChange={generatedContentOnChange}
								></textarea>
							</div>

							<div className='text-lightBrown text-center text-2xl'>
								If you don’t like this subject or email, click “Generate Again”
								or edit the text above. Otherwise, continue with the “Next
								Step”.
							</div>

							<div className='flex justify-between'>
								<PrevStepButton prevStepPath='/email-marketing-1' />
								<button
									onClick={generateButtonOnClick}
									className='flex items-center justify-around bg-lightBrown text-white rounded-50 w-96 h-20 text-3xl transition-transform hover:scale-110'
								>
									<img
										className='h-8'
										src={generateImage}
									/>
									Generate Again
								</button>
								{isGeneratedContentValid() ? (
									productInfo.isRequestedImage ? (
										<button onClick={nextStepButtonOnClick}>
											<NextStepButton nextStepPath='/email-marketing-3' />
										</button>
									) : (
										<button onClick={nextStepButtonOnClick}>
											<NextStepButton nextStepPath='/email-marketing-4' />
										</button>
									)
								) : (
									<button
										onClick={nextStepButtonOnClick}
										className='pointer-events-none'
									>
										<NextStepButton nextStepPath='/email-marketing-3' />
									</button>
								)}
							</div>
							<div></div>
						</div>
					</div>
				)
			) : (
				<NotLoggedIn />
			)}
		</div>
	);
}

export default EmailMarketingPage2;
