import { Injectable } from '@angular/core';
import {
  Kinvey,
  CacheStore,
  Entity,
  SyncStore,
  User
} from 'kinvey-nativescript-sdk';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import 'rxjs/add/operator/mergeMap';

export interface WorkOrder {
  _id;
  photo;
  workorderid;
  duedate;
  status;
  location;
  description;
}

export interface Alert {
  _id: string;
  predictedfailure: string;
  anamoly: string;
  equipment: string;
  site: string;
}

interface IDataService {
  getWorkOrders();
  getAlerts();
  login(name, password);
  loginWithMIC();
}

@Injectable()
export class KinveyService implements IDataService {
  logout() {
    return Kinvey.User.logout();
  }
  workOrdersStore: SyncStore<WorkOrder>;
  alertsStore: SyncStore<Alert>;
  title = 'app';
  constructor(private http: HttpClient) {
    this.workOrdersStore = Kinvey.DataStore.collection<WorkOrder>(
      'workorder',
      Kinvey.DataStoreType.Sync
    );
    this.alertsStore = Kinvey.DataStore.collection<Alert>(
      'alert',
      Kinvey.DataStoreType.Sync
    );
  }

  getWorkOrders(): Observable<WorkOrder[]> {
    return fromPromise(this.workOrdersStore.sync())
      .mergeMap(()=> {
        return this.workOrdersStore.find() 
      });
  }

  getWorkOrder(id: string): Observable<WorkOrder> {
    return this.workOrdersStore.findById(id);
  }

  getAlerts(): Observable<Alert[]> {
    return fromPromise(this.alertsStore.sync())
      .mergeMap(() => this.alertsStore.find());
  }

  getAlert(id: string): Observable<Alert> {
    return this.alertsStore.findById(id);
  }

  login(name, password): Promise<User> {
    if (!!Kinvey.User.getActiveUser()) {
      return Promise.resolve(Kinvey.User.getActiveUser());
    } else {
      return Kinvey.User.login(name, password);
    }
  }

  loginWithMIC(): Promise<User> {
    if (!!Kinvey.User.getActiveUser()) {
      return Promise.resolve(Kinvey.User.getActiveUser());
    } else {
      return Kinvey.User.loginWithMIC(
        'http://localhost:4200',
        Kinvey.AuthorizationGrant.AuthorizationCodeLoginPage,
        { version: 'v2' } as any
      );
    }
  }
}