import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { share } from 'rxjs/operators';

import { WorkOrder, KinveyService } from '../../kinvey.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
  moduleId: module.id,
})
export class OrderDetailsComponent implements OnInit {
  public orderId: string;
  public order$: Observable<WorkOrder>;

  constructor(
    private route: ActivatedRoute,
    private kinveyService: KinveyService
  ) { }

  ngOnInit() {
    this.orderId = this.route.snapshot.params['id'];
    this.order$ = this.kinveyService.getWorkOrder(this.orderId)
      .pipe( share() );
  }

  viewEquipment() {
    alert('implement viewEquipment');
  }
}
