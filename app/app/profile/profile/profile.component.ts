import { Component, OnInit } from '@angular/core';
import { Kinvey, User } from 'kinvey-nativescript-sdk';
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  moduleId: module.id,
})
export class ProfileComponent implements OnInit {

  constructor(private _routerExtensions: RouterExtensions) { }

  ngOnInit() {
  }

  logout() {
    Kinvey.User.logout()
        .then(() => {
            this._routerExtensions.navigate(["login"],
                {
                    clearHistory: true,
                    animated: true,
                    transition: {
                        name: "slideBottom",
                        duration: 350,
                        curve: "ease"
                    }
                });
        });
}
}
