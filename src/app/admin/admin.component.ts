import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html',
	styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

	constructor() { }

	ngOnInit() {
	}

	onSubmit(f) {
		console.log('submitting...');
		console.log(f.value);
	}

}
