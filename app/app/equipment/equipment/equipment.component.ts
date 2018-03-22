import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css'],
  moduleId: module.id,
})
export class EquipmentComponent implements OnInit {

  equipment = [];

  constructor(
    private router: RouterExtensions
  ) { }

  ngOnInit() {
    this.equipment = [
      { name: "Oil Rig Typhoon" },
      { name: "Pump Infinity S" }
    ];
  }

  equipmentSelected() {
    this.router.navigate(['/equipment', '1']);
  }
}
