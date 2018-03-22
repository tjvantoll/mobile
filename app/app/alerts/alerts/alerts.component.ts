import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Alert, KinveyService } from '../../kinvey.service';
import { Kinvey } from 'kinvey-nativescript-sdk';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
  moduleId: module.id,
})
export class AlertsComponent implements OnInit {

  public alerts$: Observable<Alert[]>
  private alerts: Alert[];

  constructor(
    private router: RouterExtensions,
    private kinveyService: KinveyService
  ) {}

  ngOnInit() {
    this.alerts$ = this.kinveyService.getAlerts()
      .map(alerts => this.alerts = alerts);
  }

  alertSelected(arg: any) {
    const alert = this.alerts[arg.index];
    this.router.navigate(['/alert', alert._id]);
  }
}
