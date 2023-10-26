import { Component } from '@angular/core';
import {DandelionService} from "../../services/dandelion.service";
import {SentimentAnalysis} from "../../dandelion";

@Component({
  selector: 'app-sentiment-analysis',
  templateUrl: './sentiment-analysis.component.html',
  styleUrls: ['./sentiment-analysis.component.css']
})
export class SentimentAnalysisComponent {
  txt: string = ''
  lang: string =''
  color: string = "#000"
  it: string = ''
  en: string = ''
  sentiment: SentimentAnalysis | undefined
  constructor(private dandelionService: DandelionService) {
  }
  getColor(t: number){
    let red = t < 0 ? 255 : 255 * (1 - t);
    let green = t > 0 ? 255 : 255 * (1 + t);
    if(t == 0){
      red = 255/2
      green = 255/2
    }

    return `rgb(${red}, ${green}, 0)`;
  }

  submit(){
    console.log(this.it, this.en)
    if(this.it)
      this.lang = "it"
    else if(this.en)
      this.lang = "en"
    this.dandelionService.getSentimentAnalysis(this.txt, this.lang).subscribe( (sentiment)=> {
      console.log(sentiment.sentiment.score)
      this.color = this.getColor(sentiment.sentiment.score)
      this.sentiment = sentiment

    })
    this.it = ''
    this.en = ''
  }
}
