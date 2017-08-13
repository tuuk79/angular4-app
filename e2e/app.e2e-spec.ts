import { Angular4AppPage } from './app.po';
import { element, by } from 'protractor/built';

describe('angular4-app App', () => {
	let page: Angular4AppPage;

	beforeEach(() => {
		page = new Angular4AppPage();
	});

	it('should display login button', () => {
		page.navigateTo();
		const loginButton = element(by.id('login-button'));
		expect(loginButton).not.toBe(null);
	});

	it('should display login username textbox', () => {
		page.navigateTo();
		const usernameTextbox = element(by.id('username'));
		expect(usernameTextbox).not.toBe(null);
	});

	it('should display password textbox', () => {
		page.navigateTo();
		const passwordTextbox = element(by.id('password'));
		expect(passwordTextbox).not.toBe(null);
	});
});
