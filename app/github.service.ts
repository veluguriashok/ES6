import {Http} from 'angular2/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import {Injectable} from 'angular2/core'

@Injectable()
export class GithubService{
    constructor(private _http: Http){}

    private _url = "https://api.github.com/users/";

    getUser(userName){
        return this._http.get(this._url + userName)
            .map(response => response.json());
    }

    getFollowers(userName){
        return this._http.get(this._url + userName + "/followers")
            .map(response => response.json());
    }
}