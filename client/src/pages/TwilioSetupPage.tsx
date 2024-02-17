import { useState } from 'react';

interface TwilioSetupPageProps {
	salesPhoneNumber: string;
	setSalesPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}

const TwilioSetupPage: React.FC<TwilioSetupPageProps> = ({
	salesPhoneNumber,
	setSalesPhoneNumber,
}) => {
	const [phoneNumberInput, setPhoneNumberInput] = useState<string>('');

	return (
		<div>
			<h1>Twilio Setup Page</h1>
			<h2>Saved Sales Assistant Phone Number: {salesPhoneNumber}</h2>
			<h3>Enter a phone number to redirect calls from interested customers</h3>
			<input
				onChange={phoneNumberOnChange}
				type='tel'
				placeholder='Sales Assistant Phone Number'
			/>
			<br />
			<button onClick={savePhoneNumberButtonOnClick}>Save Phone Number</button>
		</div>
	);

	function phoneNumberOnChange(e: React.ChangeEvent<HTMLInputElement>) {
		setPhoneNumberInput(e.target.value);
	}

	function savePhoneNumberButtonOnClick() {
		setSalesPhoneNumber(phoneNumberInput);
	}
};

export default TwilioSetupPage;
