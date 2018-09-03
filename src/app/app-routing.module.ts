import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapComponent } from './map/map.component';
import { ConquerComponent } from './conquer/conquer.component';
import { LoginComponent } from './login/login.component';
import {MainComponent} from './main/main.component';

const mainRoutes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'map', component: MapComponent },
	{ path: 'conquer/:id', component: ConquerComponent },
];

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: '',component:MainComponent, children:mainRoutes}
];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})
export class AppRoutingModule { }