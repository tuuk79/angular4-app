import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
	authenticate(user): boolean {
		let isAuthenticated = false;

		if (user) {
			isAuthenticated = true;
		}

		return isAuthenticated;
	}
}
