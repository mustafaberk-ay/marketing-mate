import { Link } from 'react-router-dom';
import { ChangeEvent, useState } from 'react';

interface GmailSetupPageProps {
	gmailAddress: string;
	setGmailAddress: React.Dispatch<React.SetStateAction<string>>;
	gmailAppPassword: string;
	setGmailAppPassword: React.Dispatch<React.SetStateAction<string>>;
}

const GmailSetupPage: React.FC<GmailSetupPageProps> = ({
	gmailAddress,
	setGmailAddress,
	gmailAppPassword,
	setGmailAppPassword,
}) => {
	const [isValidInputs, setIsValidInputs] = useState<boolean>(false);

	const validateEmail = (email: string): boolean => {
		// Basic email validation regex
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	};

	return (
		<div>
			<h1>Step 2: Gmail Setup</h1>
			<p>Enter Your Gmail Address</p>
			<input
				onChange={gmailAddressInputOnChange}
				type='email'
				placeholder='Gmail Address'
				value={gmailAddress}
			/>
			<p>Enter Your Gmail App Password</p>
			<input
				onChange={gmailAppPasswordInputOnChange}
				type='password'
				placeholder='Gmail App Password'
				value={gmailAppPassword}
			/>
			<p>
				<a href='https://support.google.com/mail/answer/185833?hl=en#:~:text=Go%20to%20your%20Google%20Account,the%20page%2C%20select%20App%20passwords.'>
					Click here
				</a>{' '}
				to learn how to get your Gmail App Password{' '}
			</p>
			{isValidInputs ? (
				<p>The input fields are valid</p>
			) : (
				<p>Please fill the input fields properly</p>
			)}
			<button onClick={setupGmailButtonOnClick}>Setup Gmail</button>
			<br />
			<Link to='/meta-setup-page'>Previous</Link>
			<br />
			<Link to='/'>Next</Link>
			<br />
			<Link to='/'>Quit</Link>
		</div>
	);

	function setupGmailButtonOnClick() {
		const isValidEmail = validateEmail(gmailAddress);
		if (isValidEmail || gmailAppPassword.length > 0) {
			setIsValidInputs(true);
		} else {
			setIsValidInputs(false);
		}
	}

	function gmailAppPasswordInputOnChange(e: ChangeEvent<HTMLInputElement>) {
		setGmailAppPassword(e.target.value);
	}

	function gmailAddressInputOnChange(e: ChangeEvent<HTMLInputElement>) {
		setGmailAddress(e.target.value);
	}
};

export default GmailSetupPage;
