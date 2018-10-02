import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MapComponent } from './map/map.component';
import { ConquerComponent } from './conquer/conquer.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { LoggedInGuard } from './logged-in.guard';
import { ClanHomeComponent } from './clan-home/clan-home.component'
import { RankingComponent } from './ranking/ranking.component';
import { MyProfileComponent} from './myprofile/myprofile.component';
import { InviteComponent } from './invite/invite.component';
import { ClanCreateComponent } from './clan-create/clan-create.component';
import { NotificationComponent } from './notification/notification.component';
import { ClanComponent } from './clan/clan.component';
import { InfoComponent } from './info/info.component';
import { GiftComponent } from './gift/gift.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ClanRankingComponent } from './clan-ranking/clan-ranking.component';
import { ClanAddedComponent } from './clan-added/clan-added.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';

const mainRoutes: Routes = [
	{ path: '', redirectTo: '/map', pathMatch: 'full' },
	{ path: 'map', component: MapComponent },
	{ path: 'profile', component: MyProfileComponent },
	{ path: 'profile/edit',component:EditProfileComponent},
	{ path: 'conquer/:id', component: ConquerComponent },
	{ path: 'ranking',component: RankingComponent},
	{ path: 'invite',component: InviteComponent},
	{ path: 'clan/home', component: ClanHomeComponent },
	{ path: 'clan/create', component: ClanCreateComponent },
	{ path: 'clan/ranking',component:ClanRankingComponent},
	{ path: 'clan/added/:id',component:ClanAddedComponent},
	// { path: 'clan/join', component: ClanJoinComponent },
	{ path: 'notification', component: NotificationComponent },
	{ path: 'info', component: InfoComponent},
	{ path: 'gift', component: GiftComponent},
	{ path: 'clan/:id', component: ClanComponent },
	{ path: 'update_password',component:UpdatePasswordComponent}
	];

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'reset_password', component: ResetPasswordComponent },
	{ path: '', component:MainComponent, children:mainRoutes, canActivate: [LoggedInGuard]}
];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})
export class AppRoutingModule { }
