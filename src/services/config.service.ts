import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  getCalls: number = 0
  getCallList: any[] = []
  constructor() { }

  increaseGetCalls(){
    this.getCalls++
  }
  getGetCalls(){
    return this.getCalls;
  }

  addGetCallList(call: string, time : Date){
    let obj = {
      getCallStr: call,
      time: time
    }
    this.getCallList.push(obj)
  }

}
