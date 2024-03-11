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
	const options = new chrome.Options().setChromeBinaryPath('.\\chrome\\App\\Chrome-bin\\chrome.exe');
	options.addArguments(
		'user-data-dir=C:\\marketingmate\\profiles'
	);
	options.addArguments('profile-directory=profile1');
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
	messageContent: string,
	imageUrl: string
) {
	const options = new chrome.Options().setChromeBinaryPath('.\\chrome\\App\\Chrome-bin\\chrome.exe');

	options.addArguments(
		'user-data-dir=C:\\marketingmate\\profiles'
	);
	options.addArguments('profile-directory=profile1');
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

		await driver.wait(
			until.elementLocated(By.xpath(`//span[@title='${contactName}']`))
		);

		//await driver.sleep(1000)

		const contact = await driver.findElement(
			By.xpath(`//span[@title='${contactName}']`)
		);
		await driver.wait(
			until.elementLocated(By.xpath(`//span[@title='${contactName}']`))
		);
		await driver.executeScript('arguments[0].scrollIntoView(true);', contact);
		await driver.wait(async function () {
			const isEnabled = await contact.isEnabled();
			const isDisplayed = await contact.isDisplayed();
			return isEnabled && isDisplayed;
		});
		await contact.click();
		await driver.wait(until.elementLocated(By.css("[title='Type a message']")));

		const messageInput = await driver.findElement(
			By.css("[title='Type a message']")
		);

		await messageInput.sendKeys(messageContent, Key.RETURN);

		imageUrl = "Product Related Image: " + imageUrl
		await messageInput.sendKeys(imageUrl, Key.RETURN);

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

		//console.log(finalSentMessageCount, 'finalSentMessageCount')

		await driver.quit();
	return 'Whatsapp Message Sent Successfully';
}
