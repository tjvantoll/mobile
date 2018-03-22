import { Component, OnInit } from '@angular/core';
import { Alert, KinveyService } from '../../kinvey.service';

import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css'],
  moduleId: module.id,
})
export class AlertDetailsComponent implements OnInit {
  public alertId: string;
  public alert$: Observable<Alert>;

  constructor(
    private route: ActivatedRoute,
    private kinveyService: KinveyService
  ) { }

  ngOnInit() {
    this.alertId = this.route.snapshot.params['id'];
    this.alert$ = this.kinveyService.getAlert(this.alertId)
      .pipe( share() );
  }

  openOrder() {
    alert('implement openOder');
  }

  dismiss() {
    alert('implement dismiss');
  }
}
