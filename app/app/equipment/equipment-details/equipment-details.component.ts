import { Component, OnInit } from '@angular/core';
import { registerElement } from "nativescript-angular/element-registry";
import { AR, ARMaterial, ARNode, ARPlaneTappedEventData } from "nativescript-ar";
import { Color } from "tns-core-modules/color";

registerElement("AR", () => require("nativescript-ar").AR);

@Component({
  selector: 'app-equipment-details',
  templateUrl: './equipment-details.component.html',
  styleUrls: ['./equipment-details.component.css'],
  moduleId: module.id,
})
export class EquipmentDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    if (!AR.isSupported()) {
      alert("Your device does not support Augmented reality");
    }
  }

  planeMaterial = <ARMaterial>{
    diffuse: new Color("white"),
    transparency: 0.2
  };

  onPlaneTapped(args: ARPlaneTappedEventData): void {
    const ar: AR = args.object;
    ar.addModel({
      name: "Models.scnassets/Ball.dae",
      position: {
        x: args.position.x,
        y: args.position.y,
        z: args.position.z
      },
      scale: 1,
      mass: 20
    });
  }
}
