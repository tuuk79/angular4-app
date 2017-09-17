import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCheckboxModule } from '@angular/material';
import 'hammerjs';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingComponent } from './shopping/shopping.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsComponent } from './products/products.component';

const appRoutes: Routes = [
	{ path: '', component: LoginComponent },
	{ path: 'products', component: ProductsComponent },
	{ path: 'shopping', component: ShoppingComponent },
	{ path: 'admin', component: AdminComponent }
];

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		ShoppingComponent,
		AdminComponent,
		ProductsComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		MdButtonModule,
		MdCheckboxModule,
		FlexLayoutModule,
		FormsModule,
		RouterModule.forRoot(
			appRoutes
			// { enableTracing: true } // <-- debugging purposes only
		)
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
