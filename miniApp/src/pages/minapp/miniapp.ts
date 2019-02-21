import { Component } from "@angular/core";

@Component({
  selector: "page-miniapp",
  templateUrl: "miniapp.html"
})
export class MiniAppPage {
  tap = 0;
  press = 0;
  constructor() {}

  onTap() {
     this.tap++;
  }

  onPress() {
    this.press++;
  }

  didWin() {
    return this.tap == 2 && this.press == 4;
  }

  onDidReset(resetType: string) {
    switch (resetType) {
      case "tap":
        this.tap = 0;
        break;
      case "press":
        this.press = 0;
        break;
      default:
        this.press = 0;
        this.tap = 0;
        break;
    }
  }
}
