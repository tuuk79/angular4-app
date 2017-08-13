import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import 'hammerjs';
import { LoginComponent } from './login/login.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MdButtonModule,
		MdCheckboxModule,
		FlexLayoutModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
