import { Component, ElementRef, OnInit } from "@angular/core";
import { Button } from "ui/button";
import { Kinvey, User } from 'kinvey-nativescript-sdk';
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "tns-core-modules/ui/page"
import { EventData } from "data/observable";
import { StackLayout } from "ui/layouts/stack-layout";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {
    public loggedUser: string;

    constructor(private _routerExtensions: RouterExtensions, private page: Page) {
        this.page.actionBarHidden = false;
    }

    ngOnInit(): void {
        Kinvey.User.me()
            .then((user: User) => {
                this.loggedUser = user.data['_socialIdentity'].kinveyAuth.id
            });
    }
}
