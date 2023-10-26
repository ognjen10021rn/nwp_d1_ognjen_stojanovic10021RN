import {Component, OnInit} from '@angular/core';
import {ConfigService} from "../../services/config.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit{
  getCalls: any[] = []
  getCallsNumber = 0
  constructor(private config: ConfigService) {
    this.getCalls = this.config.getCallList
    this.getCallsNumber = this.config.getCalls
  }

  ngOnInit(): void {
    this.getCalls = this.config.getCallList
    this.getCallsNumber = this.config.getCalls
  }


}
