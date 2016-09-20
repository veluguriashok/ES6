import {Component, OnInit} from 'angular2/core'
import {GithubComponent} from './github.component'

@Component({
    selector: 'my-app',
    template: `<div class="container">
                <div><github></github></div>
        </div>`,
    directives: [GithubComponent]
})
export class AppComponent implements OnInit{
    ngOnInit(){
    }
}