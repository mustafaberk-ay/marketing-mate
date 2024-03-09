import app from './app';
import { retrieveMarketingMateAssistantService } from './services/chatThread';

const port = 3000;

app.listen(port, () => {
	console.log(`server is running on port ${port}`);
	retrieveMarketingMateAssistantService()
});
