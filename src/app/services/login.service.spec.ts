import { LoginService } from './login.service';

describe('login service', () => {
	it('should get created', () => {
		const loginService = new LoginService();
		expect(loginService).not.toBe(null);
	});

	it('should login successfully', () => {
		const loginService = new LoginService();
		const response = loginService.getHello();
		expect(response).toBe('hello');
	});
});
