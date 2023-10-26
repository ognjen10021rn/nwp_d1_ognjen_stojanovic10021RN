import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dandelion, LanguageDetection, SentimentAnalysis, TextSimilarity} from "../dandelion";
import {TokenService} from "./token.service";
import {ConfigService} from "./config.service";

@Injectable({
  providedIn: 'root'
})
export class DandelionService {
  private apiUrl = "https://api.dandelion.eu/datatxt/nex/v1/"
  private apiTextSimilarity = "https://api.dandelion.eu/datatxt/sim/v1/"
  private apiLanguageDetection = "https://api.dandelion.eu/datatxt/li/v1/"
  private apiSentimentAnalysis = "https://api.dandelion.eu/datatxt/sent/v1/"
  constructor(private httpClient: HttpClient, private config: TokenService, private config2: ConfigService) {

  }
  getPosts(txt: string, slider: number,inc: string): Observable<Dandelion>{
    this.config2.increaseGetCalls()
    this.config2.addGetCallList(`${this.apiUrl}?text=${txt}&include=${inc}&token=${localStorage.getItem('token')}&min_confidence=${slider}`, new Date())
    return this.httpClient.get<Dandelion>(`${this.apiUrl}?text=${txt}&include=${inc}&token=${localStorage.getItem('token')}&min_confidence=${slider}`)
  }
  getTextSimilarity(txt1: string, txt2: string): Observable<TextSimilarity>{
    this.config2.increaseGetCalls()
    this.config2.addGetCallList(`${this.apiTextSimilarity}?text1=${txt1}&text2=${txt2}&token=${localStorage.getItem('token')}`, new Date())
    return this.httpClient.get<TextSimilarity>(`${this.apiTextSimilarity}?text1=${txt1}&text2=${txt2}&token=${localStorage.getItem('token')}`)
  }
  getLanguageDetection(txt: string, clean: boolean): Observable<LanguageDetection>{
    this.config2.increaseGetCalls()
    this.config2.addGetCallList(`${this.apiLanguageDetection}?text=${txt}&clean=${clean}&token=${localStorage.getItem('token')}`, new Date())
    return this.httpClient.get<LanguageDetection>(`${this.apiLanguageDetection}?text=${txt}&clean=${clean}&token=${localStorage.getItem('token')}`)
  }
  getSentimentAnalysis(txt: string, lang: string): Observable<SentimentAnalysis>{
    this.config2.increaseGetCalls()
    this.config2.addGetCallList(`${this.apiSentimentAnalysis}?lang=${lang}&text=${txt}&token=${localStorage.getItem('token')}`, new Date())
    return this.httpClient.get<SentimentAnalysis>(`${this.apiSentimentAnalysis}?lang=${lang}&text=${txt}&token=${localStorage.getItem('token')}`)
  }
}
