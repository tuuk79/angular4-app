import { LoginService } from './login.service';

describe('login service', () => {
	it('should get created', () => {
		const loginService = new LoginService();
		expect(loginService).not.toBe(null);
	});

	it('should return a login response', () => {
		const user = {
			username: 'steve',
			password: 'somepassword'
		};

		const loginService = new LoginService();
		const response = loginService.authenticate();
		expect(response).not.toBe(null);
	});
});
