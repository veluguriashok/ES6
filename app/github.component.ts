import {Component, OnInit} from 'angular2/core'
import {GithubService} from './github.service'
import {HTTP_PROVIDERS} from 'angular2/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/observable/forkJoin'

@Component({
    selector: 'github',
    template: `<i *ngIf="isLoading" class="fa fa-spin fa-spinner fa-pulse fa-5x"></i>
        <div class="form-group">
            <label>User Name</label>
            <input id="userName" class="form-control">
        </div>
        <h2 style="margin: 0 0 5 0">@{{user.login}}</h2>
        <img class="avatar" src="{{user.avatar_url}}">
        <h3 style="margin: 20 0 5 0">Followers</h3>
        <div style="max-height:50%; overflow-y: scroll">
        <div *ngFor="#follower of followers" class="media">
            <div class="media-left">
                <a href="#">
                    <img class="media-object avatar" src="{{follower.avatar_url}}" alt="...">
                </a>
            </div>
            <div class="media-body" style="vertical-align:middle">
                <h4 class="media-heading">{{follower.login}}</h4>
            </div>
        </div>

        </div>`,
    styles: [`.avatar{width:100; border-radius:100%}`],
    providers: [HTTP_PROVIDERS, GithubService]
})
export class GithubComponent implements OnInit{
    isLoading = true;
    userName = "Ab";
    user = {};
    followers = [];
    
    constructor(private _githubService: GithubService){
        $("#userName").keyup(function(){this.userName = $("#userName").val(); console.log});
    }

    ngOnInit(){
        this.fetch();
    }

    fetch(){
        Observable.forkJoin(
            this._githubService.getUser(this.userName),
            this._githubService.getFollowers(this.userName)
        ).subscribe(
            response => {
                this.user = response[0];
                this.followers = response[1];
            }, null, () => {this.isLoading = false}
        )
    }
}