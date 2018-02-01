import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MdDialogModule,
	MdDatepickerModule,
	MdFormFieldModule,
	MdNativeDateModule,
	MdInputModule,
	MdButtonModule,
	MdListModule,
	MdCheckboxModule,
	MdCardModule,
	MdRadioModule,
	MdProgressBarModule
} from '@angular/material';

import { AgmCoreModule, LAZY_MAPS_API_CONFIG } from '@agm/core';

import { AppComponent } from './app.component';
import { ChatThreadComponent } from './components/chat-thread/chat-thread.component';

import { StompService } from './services/stomp.service';
import { APIService } from './services/api.service';
import { UtilitiesService } from './services/utilities.service';
import { SimulatorService } from './services/simulator.service';
import { ComplexInputComponent } from './components/complex-input/complex-input.component';
import { GoogleMapsConfig } from './models/google-maps-config.model';
import { MatCSSService } from './services/mat-css.service';
import { ChainDelayService } from './services/chain-delay.service';
import { InfoDialogComponent } from './components/info-dialog/info-dialog.component';
import { InfoDialogService } from './services/info-dialog.service';
@NgModule({
	declarations: [
		AppComponent,
		ChatThreadComponent,
		ComplexInputComponent,
		InfoDialogComponent 
	],
	imports: [
		BrowserModule,
		FormsModule,
		BrowserAnimationsModule,
		MdDialogModule,
		MdDatepickerModule,
		MdFormFieldModule,
		MdNativeDateModule,
		MdInputModule,
		MdButtonModule,
		MdListModule,
		MdCheckboxModule,
		MdCardModule,
		MdRadioModule,
		MdProgressBarModule,
		RouterModule.forRoot([
			{ path: '', component: ChatThreadComponent },
			{ path: '**', redirectTo: '' }
		]),
		HttpModule,
		AgmCoreModule.forRoot()
	],
	providers: [
		StompService,
		UtilitiesService,
		APIService,
		MatCSSService,
		ChainDelayService,
		SimulatorService,
		InfoDialogService,
		{ provide: LAZY_MAPS_API_CONFIG, useClass: GoogleMapsConfig }
	],
	bootstrap: [AppComponent],
	entryComponents: [
		ComplexInputComponent,
		InfoDialogComponent
	],
	schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
