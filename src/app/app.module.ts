import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { GisComponent } from './gis/gis.component';
import { MainComponent } from './main/main.component';
import { MapComponent } from './map/map.component';
import { TerritoryComponent } from './territory/territory.component';
import { TerritoryViewComponent } from './territory-view/territory-view.component';
import { LoginModalComponent } from './login-modal/login-modal.component';
import { ConquerComponent } from './conquer/conquer.component';
import { LoginComponent } from './login/login.component';
import { ClanHomeComponent } from './clan-home/clan-home.component';
import { InviteComponent } from './invite/invite.component';
import { RankingComponent } from './ranking/ranking.component';
import { ClanCreateComponent } from './clan-create/clan-create.component';
import { ClanComponent } from './clan/clan.component';
import { NotificationComponent } from './notification/notification.component';
import { MyProfileComponent } from './myprofile/myprofile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { UserAvatarSelectDialogBodyComponent } from './user-avatar-select-dialog-body/user-avatar-select-dialog-body.component';
import { InfoComponent } from './info/info.component';
import { GiftComponent } from './gift/gift.component';
import { BuyDialogComponent } from './buy-dialog/buy-dialog.component';
import { ClanRankingComponent } from './clan-ranking/clan-ranking.component';
import { ClanAddedComponent } from './clan-added/clan-added.component';

import {CheckboxGroupComponent} from './component/checkbox-group.component';
import {CheckboxComponent} from './component/checkbox.component';


import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatCheckboxModule ,MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AUTH_PROVIDERS } from './services/auth.service';
import { LoggedInGuard } from './logged-in.guard';


import {TerritoryService} from './services/territory.service';
import {ClanService} from './services/clan.service';
import {UserService} from './services/user.service';
import { NotificationService } from './services/notification.service';
import {CommonService} from './services/common.service';
import {GlobalState} from './state';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserHeaderComponent,
    GisComponent,
    MainComponent,
    MapComponent,
    TerritoryComponent,
    TerritoryViewComponent,
    LoginModalComponent,
    ConquerComponent,
    LoginComponent,
    ClanHomeComponent,
    NotificationComponent,
    RankingComponent,
    ClanCreateComponent,
    ClanComponent,
    InviteComponent,
    CheckboxGroupComponent,
    CheckboxComponent,
    InfoComponent,
    GiftComponent,
    MyProfileComponent,
    EditProfileComponent,
    UserAvatarSelectDialogBodyComponent,
    BuyDialogComponent,
    ClanRankingComponent,
    ClanAddedComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  entryComponents: [
    UserAvatarSelectDialogBodyComponent,
    BuyDialogComponent,
  ],
  providers: [
    GlobalState,
    TerritoryService,
    AUTH_PROVIDERS,
    LoggedInGuard,
    ClanService,
    UserService,
    NotificationService,
    CommonService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
