import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { SignupComponent } from './components/signup/signup.component';
import { MatchesComponent } from './components/matches/matches.component';
import { PlayersComponent } from './components/players/players.component';
import { DeshboardComponent } from './components/deshboard/deshboard.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { MatchinfoComponent } from './components/matchinfo/matchinfo.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { EditPlayerComponent } from './components/edit-player/edit-player.component';
import { PlayerInfoComponent } from './components/player-info/player-info.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileAdminComponent } from './components/profile-admin/profile-admin.component';
import { AdminComponent } from './admin/admin.component';
const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "contact", component: ContactComponent },
  { path: "add-match", component: AddMatchComponent },
  { path: "signup", component: SignupComponent },
  { path: "matches", component: MatchesComponent }
  ,
  { path: "players", component: PlayersComponent }
  ,
  { path: "deshboerd", component: DeshboardComponent },
  { path: "edit-match/:id", component: EditMatchComponent },
  { path: "match-info/:id", component: MatchinfoComponent },
  { path: "add-player", component: AddPlayerComponent },
  { path: "edit-player/:id", component: EditPlayerComponent },
  { path: "player-info/:id", component: PlayerInfoComponent },
  { path: "login", component: LoginComponent },
  { path: "Profil_admin", component: ProfileAdminComponent },
  { path: "admin", component: AdminComponent },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
