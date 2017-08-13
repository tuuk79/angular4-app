import { LoginService } from './login.service';
import { User } from '../models/user';

describe('login service', () => {
	it('should get created', () => {
		const loginService = new LoginService();
		expect(loginService).not.toBe(null);
	});

	it('should return a login response', () => {
		const user: User = {
			username: 'steve',
			password: 'somepassword'
		};

		const loginService = new LoginService();
		const response = loginService.authenticate(user);
		expect(response).not.toBe(null);
	});
});
