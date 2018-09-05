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

import { AppRoutingModule } from './app-routing.module';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AUTH_PROVIDERS } from './auth.service';
import { LoggedInGuard } from './logged-in.guard';


import {TerritoryService} from './territory.service';
import {ClanService} from './clan.service';
import { RankingComponent } from './ranking/ranking.component';

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
    RankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TerritoryService,
    AUTH_PROVIDERS,
    LoggedInGuard,
    ClanService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
