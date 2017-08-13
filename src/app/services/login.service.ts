import { Component } from '@angular/core';

@Component({
	selector: 'login-service',
	templateUrl: './login.service.html',
	styleUrls: ['./login.service.css']
})

export class LoginService {
	authenticate(){
    return true;
	}
}
