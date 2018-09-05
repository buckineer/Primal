import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapComponent } from './map/map.component';
import { ConquerComponent } from './conquer/conquer.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { LoggedInGuard } from './logged-in.guard';
import { ClanHomeComponent } from './clan-home/clan-home.component'
import { RankingComponent } from './ranking/ranking.component';
import { ClanCreateComponent } from './clan-create/clan-create.component';
import { NotificationComponent } from './notification/notification.component';
import { ClanComponent } from './clan/clan.component';

const mainRoutes: Routes = [
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: 'map', component: MapComponent },
	{ path: 'conquer/:id', component: ConquerComponent },
	{ path: 'clan/home', component: ClanHomeComponent },
	{ path: 'ranking', component: RankingComponent },
	{ path: 'clan/create', component: ClanCreateComponent },
	{ path: 'notification', component: NotificationComponent },
	{ path: 'clan/:id', component: ClanComponent },
];

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: '', component:MainComponent, children:mainRoutes, canActivate: [LoggedInGuard]}
];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})
export class AppRoutingModule { }
