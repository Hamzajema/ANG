import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchUrl: string ="http://localhost:4000/api"
  constructor(private http:HttpClient) { }
  getAllMatches() {
    return this.http.get(this.matchUrl + "/get_matches");

  }
  getMatchById(id) {
    return this.http.get(this.matchUrl + " / matches_by_id /" + id);

  }
  deleteMatchById(id) {
    return this.http.delete(this.matchUrl + " / delete_match /" + id);

  }
  addMtch(matchObj) {
    return this.http.post(this.matchUrl + "/add-match", matchObj);
  }
  editMatch(matchObj) {
    return this.http.put(this.matchUrl + "/update-match/" + matchObj._id, matchObj);
  }

}
