import {
	WebDriver,
	Builder,
	By,
	until,
	Browser,
	Key,
	Actions,
	WebElement,
} from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome';

export async function setupWhatsappService() {
	const options = new chrome.Options();
	options.addArguments(
		'user-data-dir=C:\\Users\\Mustafa\\AppData\\Local\\Google\\Chrome\\User Data'
	);
	options.addArguments('profile-directory=marketingmate');
	options.addArguments('--start-fullscreen');
	options.addArguments('--disable-gpu');
	options.addArguments('--no-sandbox');
	options.addArguments('--disable-dev-shm-usage');
	options.addArguments('--ignore-certificate-errors');
	options.addArguments('--disable-infobars');
	options.addArguments('--disable-extensions');
	options.addArguments('--disable-popup-blocking');
	options.addArguments('--disable-web-security');

	const driver: WebDriver = await new Builder()
		.forBrowser(Browser.CHROME)
		.setChromeOptions(options)
		.build();

	await driver.get('https://web.whatsapp.com/');

	await driver.wait(
		until.elementLocated(By.css("[title='Search input textbox']"))
	);

	await driver.quit();
	return 'Whatsapp Setup Successful';
}

export async function sendWhatsappMessageService(
	contactName: string,
	messageContent: string
) {
	const options = new chrome.Options();
	options.addArguments(
		'user-data-dir=C:\\Users\\Mustafa\\AppData\\Local\\Google\\Chrome\\User Data'
	);
	options.addArguments('profile-directory=marketingmate');
	options.addArguments('--start-fullscreen');
	options.addArguments('--disable-gpu');
	options.addArguments('--no-sandbox');
	options.addArguments('--disable-dev-shm-usage');
	options.addArguments('--ignore-certificate-errors');
	options.addArguments('--disable-infobars');
	options.addArguments('--disable-extensions');
	options.addArguments('--disable-popup-blocking');
	options.addArguments('--disable-web-security');

	const driver: WebDriver = await new Builder()
		.forBrowser(Browser.CHROME)
		.setChromeOptions(options)
		.build();

	await driver.get('https://web.whatsapp.com/');

	await driver.wait(
		until.elementLocated(By.css("[title='Search input textbox']"))
	);

	const sentStatusSelector = 'span[data-icon="msg-check"]';

	const searchInput = await driver.findElement(
		By.css("[title='Search input textbox']")
	);
	await searchInput.sendKeys(contactName);
	let element: WebElement = await driver.wait(
		until.elementLocated(By.css('span[title="Annem2"]')),
		10000
	);

	console.log('element located')
	await element.click()
	console.log('element clicked')

	await driver.wait(until.elementLocated(By.css("[title='Type a message']")));

	const messageInput = await driver.findElement(
		By.css("[title='Type a message']")
	);

	await messageInput.sendKeys(messageContent, Key.RETURN);

	const initialSentMessageCount = await (
		await driver.findElements(By.css(sentStatusSelector))
	).length;
	//console.log(initialSentMessageCount, 'initialSentMessageCount');

	let finalSentMessageCount = await (
		await driver.findElements(By.css(sentStatusSelector))
	).length;

	while (finalSentMessageCount == initialSentMessageCount) {
		await driver.sleep(100);
		finalSentMessageCount = await (
			await driver.findElements(By.css(sentStatusSelector))
		).length;
	}

	await driver.quit();
}
