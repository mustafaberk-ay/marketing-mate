import { Link } from "react-router-dom";

interface SetupSummaryPageProps {
	facebookUserAccessToken: string;
	gmailAddress: string;
	gmailAppPassword: string;
	salesPhoneNumber: string;
    setIsSetupCompleted: React.Dispatch<React.SetStateAction<boolean>>;
}

const SetupSummaryPage: React.FC<SetupSummaryPageProps> = ({
	facebookUserAccessToken,
	gmailAddress,
	gmailAppPassword,
	salesPhoneNumber,
    setIsSetupCompleted
}) => {
	return (
		<div>
			<h1>Step 5: Setup Summary</h1>
			<h3>Facebook Login Status</h3>
			{facebookUserAccessToken ? (
				<p>Logged into Facebook Successfully</p>
			) : (
				<p>Not Logged into Facebook</p>
			)}
			<h3>Gmail Setup Info</h3>
			<p>Gmail Address: {gmailAddress}</p>
			{gmailAppPassword ? (
				<p>Gmail App Password Retrieved Successfully</p>
			) : (
				<p>Please Setup Gmail App Password</p>
			)}
			<h3>Cold Call Setup Info</h3>
			<p>Sales Assistant Phone Number: {salesPhoneNumber}</p>
            <Link to='/'><button onClick={completeSetupButtonOnClick}>Complete Setup</button></Link>
		</div>
	);

    function completeSetupButtonOnClick(){
        setIsSetupCompleted(true)
    }
};

export default SetupSummaryPage;
