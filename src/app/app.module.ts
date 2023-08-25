import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScoreComponent } from './components/score/score.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { BlogComponent } from './components/blog/blog.component';
import { MatchesComponent } from './components/matches/matches.component';
import { NewsInfoComponent } from './components/news-info/news-info.component';
import { ArticleComponent } from './components/article/article.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatchComponent } from './components/match/match.component';
import { BannerComponent } from './components/banner/banner.component';
import { ReversePipe } from './pipes/reverse.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { PlayersComponent } from './components/players/players.component';
import { DeshboardComponent } from './components/deshboard/deshboard.component';
import { MatchesTabComponent } from './components/matches-tab/matches-tab.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { MatchinfoComponent } from './components/matchinfo/matchinfo.component';
import { HttpClientModule }from '@angular/common/http';
import { PlayerComponent } from './components/player/player.component';
import { PhotoPlayerComponent } from './components/photo-player/photo-player.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { PlayersTabComponent } from './components/players-tab/players-tab.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { ProfileAdminComponent } from './components/profile-admin/profile-admin.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    SignupComponent,
    ContactComponent,
    FooterComponent,
    ScoreComponent,
    CupEventComponent,
    NewsComponent,
    StatsComponent,
    BlogComponent,
    MatchesComponent,
    NewsInfoComponent,
    ArticleComponent,
    AddMatchComponent,
    MatchComponent,
    BannerComponent,
    ReversePipe,
    FilterPipe,
    PlayersComponent,
    DeshboardComponent,
    MatchesTabComponent,
    EditMatchComponent,
    MatchinfoComponent,
    PlayerComponent,
    PhotoPlayerComponent,
    AddPlayerComponent,
    PlayersTabComponent,
    EditPlayerComponent,
    PlayerInfoComponent,
    ProfileAdminComponent,
    AdminComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // ==> TDF module
    ReactiveFormsModule, // ==> Reactive form  module
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
