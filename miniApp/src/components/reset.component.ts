import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-reset",
  template: `
    <ion-row>
      <ion-col col-auto>
        <button ion-button small color="danger" (click)="onReset('all')">Reset All</button>
      </ion-col>
      <ion-col col-auto>
        <button ion-button small color="danger" (click)="onReset('tap')">Reset "Taps"</button>
      </ion-col>
      <ion-col col-auto>
        <button ion-button small color="danger" (click)="onReset('press')">Reset "Presses"</button>
      </ion-col>
    </ion-row>
  `
})
export class ResetComponent {
 @Output() didReset = new EventEmitter<string>();
  onReset(type: string) {
    this.didReset.emit(type);
  }
}
