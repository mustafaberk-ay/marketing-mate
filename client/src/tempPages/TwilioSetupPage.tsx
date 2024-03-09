import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';
import { setSalesPhoneNumber } from '../redux/slices/userInfoSlice';

const TwilioSetupPage: React.FC = () => {
	const dispatch = useDispatch();
	const userInfo = useSelector((state: RootState) => state.user);

	const [phoneNumberInput, setPhoneNumberInput] = useState<string>('');

	return (
		<div>
			<h1>Step 4: Cold Call Setup Page</h1>
			<h2>Saved Sales Assistant Phone Number: {userInfo.salesPhoneNumber}</h2>
			<h3>Enter a phone number to redirect calls from interested customers</h3>
			<input
				onChange={phoneNumberOnChange}
				type='tel'
				placeholder='Sales Assistant Phone Number'
			/>
			<br />
			<button onClick={savePhoneNumberButtonOnClick}>Save Phone Number</button>
			<br />
			<Link to='/whatsapp-setup-page'>Previous</Link>
			<Link to='/setup-summary-page'>Next</Link>
			<Link to='/'>Quit</Link>
		</div>
	);

	function phoneNumberOnChange(e: React.ChangeEvent<HTMLInputElement>) {
		setPhoneNumberInput(e.target.value);
	}

	function savePhoneNumberButtonOnClick() {
		dispatch(setSalesPhoneNumber(phoneNumberInput));
	}
};

export default TwilioSetupPage;
