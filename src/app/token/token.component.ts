import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../services/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent{
  token: string;

  constructor(private tokenService: TokenService, private router: Router) {
    this.token = this.tokenService.getToken();
  }

  ngOnInit(): void {
  }
  setToken(): void{
    console.log(this.token)
    this.tokenService.setLoggedIn(true);
    this.tokenService.setToken(this.token);
    this.router.navigate(['/'])
  }

}
