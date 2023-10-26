import { Component } from '@angular/core';
import {DandelionService} from "../../services/dandelion.service";
import {TextSimilarity} from "../../dandelion";

@Component({
  selector: 'app-text-similarity',
  templateUrl: './text-similarity.component.html',
  styleUrls: ['./text-similarity.component.css']
})
export class TextSimilarityComponent {

  txt1: string = ''
  txt2: string = ''
  result: TextSimilarity | undefined

  constructor(private dandelionService: DandelionService) {
  }
  submit(){
    this.dandelionService.getTextSimilarity(this.txt1, this.txt2).subscribe( (result) => {
      this.result = result
    })
  }
}
