import { Component } from '@angular/core';
import {TokenService} from "../services/token.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nwp_d1_ognjen_stojanovic_10021rn';
  private _isDisabled: boolean

  constructor(private config: TokenService) {
    this._isDisabled = this.config.getIsLoggedIn()
  }
  get isDisabled(): boolean {

    return this.config.getIsLoggedIn();
  }

  set isDisabled(value: boolean) {
    this._isDisabled = value;
  }
}
