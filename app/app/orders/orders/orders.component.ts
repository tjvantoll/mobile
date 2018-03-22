import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { WorkOrder, KinveyService } from '../../kinvey.service';
import { RouterExtensions } from 'nativescript-angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  moduleId: module.id,
})
export class OrdersComponent implements OnInit {
  public orders$: Observable<WorkOrder[]>
  private orders: WorkOrder[];

  constructor(
    private router: RouterExtensions,
    private kinveyService: KinveyService
  ) { }

  ngOnInit() {
    this.orders$ = this.kinveyService.getWorkOrders()
      .map(orders => this.orders = orders);
  }

  orderSelected(arg: any) {
    const order = this.orders[arg.index];
    this.router.navigate(['/order', order._id]);
  }
}
