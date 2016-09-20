System.register(['angular2/core', './github.service', 'angular2/http', 'rxjs/Observable', 'rxjs/add/observable/forkJoin'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, github_service_1, http_1, Observable_1;
    var GithubComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (github_service_1_1) {
                github_service_1 = github_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            GithubComponent = (function () {
                function GithubComponent(_githubService) {
                    this._githubService = _githubService;
                    this.isLoading = true;
                    this.userName = "Ab";
                    this.user = {};
                    this.followers = [];
                    $("#userName").keyup(function () { this.userName = $("#userName").val(); console.log; });
                }
                GithubComponent.prototype.ngOnInit = function () {
                    this.fetch();
                };
                GithubComponent.prototype.fetch = function () {
                    var _this = this;
                    Observable_1.Observable.forkJoin(this._githubService.getUser(this.userName), this._githubService.getFollowers(this.userName)).subscribe(function (response) {
                        _this.user = response[0];
                        _this.followers = response[1];
                    }, null, function () { _this.isLoading = false; });
                };
                GithubComponent = __decorate([
                    core_1.Component({
                        selector: 'github',
                        template: "<i *ngIf=\"isLoading\" class=\"fa fa-spin fa-spinner fa-pulse fa-5x\"></i>\n        <div class=\"form-group\">\n            <label>User Name</label>\n            <input id=\"userName\" class=\"form-control\">\n        </div>\n        <h2 style=\"margin: 0 0 5 0\">@{{user.login}}</h2>\n        <img class=\"avatar\" src=\"{{user.avatar_url}}\">\n        <h3 style=\"margin: 20 0 5 0\">Followers</h3>\n        <div style=\"max-height:50%; overflow-y: scroll\">\n        <div *ngFor=\"#follower of followers\" class=\"media\">\n            <div class=\"media-left\">\n                <a href=\"#\">\n                    <img class=\"media-object avatar\" src=\"{{follower.avatar_url}}\" alt=\"...\">\n                </a>\n            </div>\n            <div class=\"media-body\" style=\"vertical-align:middle\">\n                <h4 class=\"media-heading\">{{follower.login}}</h4>\n            </div>\n        </div>\n\n        </div>",
                        styles: [".avatar{width:100; border-radius:100%}"],
                        providers: [http_1.HTTP_PROVIDERS, github_service_1.GithubService]
                    }), 
                    __metadata('design:paramtypes', [github_service_1.GithubService])
                ], GithubComponent);
                return GithubComponent;
            })();
            exports_1("GithubComponent", GithubComponent);
        }
    }
});
//# sourceMappingURL=github.component.js.map