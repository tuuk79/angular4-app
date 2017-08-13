import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				AppComponent,
				LoginComponent
			],
		}).compileComponents();
	}));

});
