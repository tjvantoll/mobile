import { Component } from "@angular/core";
import { Button } from "ui/button";
import { Kinvey } from 'kinvey-nativescript-sdk';
import { RouterExtensions } from "nativescript-angular/router";
import { NgZone } from "@angular/core";
import { Page } from "tns-core-modules/ui/page"
import * as platform from "tns-core-modules/platform";
import * as color from "tns-core-modules/color";
import { KinveyService } from "../kinvey.service";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./login.component.html"
})
export class LoginComponent {

    name = 'admin';
    password = 'admin';

    constructor(
        private _routerExtensions: RouterExtensions,
        private zone: NgZone,
        private page: Page,
        private kinveyService: KinveyService
    ) {
        this.page.actionBarHidden = true;
        this.page.backgroundSpanUnderStatusBar = true;
        this.page.className = "page-login-container";
        // this.page.statusBarStyle = "dark";

    }

    async login() {
        try {
            await this.kinveyService.login(this.name, this.password);
            this.navigateHome();
        } catch (error) {
            alert("An error occurred. Check your Kinvey settings.");
            console.log("error: " + error);
        }
    }

    async loginWithMIC() {
        try {
            const user = await this.kinveyService.loginWithMIC();
            this.navigateHome();
            console.log("user: " + JSON.stringify(user));
        } catch (error) {
            alert("An error occurred. Check your Kinvey settings.");
            console.log("error: " + error);
        }

        // if (Kinvey.User.getActiveUser() == null) {
        //     Kinvey.User.loginWithMIC('http://localhost:4200')
        //         .then((user: Kinvey.User) => {
        //             this.navigateHome();
        //             console.log("user: " + JSON.stringify(user));
        //         })
        //         .catch((error: Kinvey.BaseError) => {
        //             alert("An error occurred. Check your Kinvey settings.");
        //             console.log("error: " + error);
        //         });
        // } else {
        //     this.navigateHome();
        // }
    }

    private navigateHome() {
        this.zone.run(() => {
            this._routerExtensions.navigate(["home"], {
                clearHistory: true,
                animated: true,
                transition: {
                    name: "slideTop",
                    duration: 350,
                    curve: "ease"
                }
            });
        });
    }
}
