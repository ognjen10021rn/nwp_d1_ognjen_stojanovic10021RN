import { Component } from '@angular/core';
import {DandelionService} from "../../services/dandelion.service";
import {LanguageDetection} from "../../dandelion";

@Component({
  selector: 'app-language-detection',
  templateUrl: './language-detection.component.html',
  styleUrls: ['./language-detection.component.css']
})
export class LanguageDetectionComponent {
  clean: boolean = false
  txt: string = ''
  langDetection: LanguageDetection | undefined

  constructor(private dandelionService: DandelionService) {

  }

  submit(){
    console.log(this.clean, this.txt)
    this.dandelionService.getLanguageDetection(this.txt, this.clean).subscribe( (lang) => {
      this.langDetection = lang
    })
  }

}
