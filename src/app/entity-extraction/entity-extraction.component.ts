import {Component, OnInit} from '@angular/core';
import {Dandelion} from "../../dandelion";
import {DandelionService} from "../../services/dandelion.service";

@Component({
  selector: 'app-entity-extraction',
  templateUrl: './entity-extraction.component.html',
  styleUrls: ['./entity-extraction.component.css']
})
export class EntityExtractionComponent implements OnInit{
  posts: Dandelion | undefined;
  txt: string = ''
  slider: number = 0.0
  include: string = ''
  image: string = ''
  abstract: string = ''
  categories: string = ''


  constructor(private dandelionService: DandelionService) {
  }

  setTxt(value: string) {
    this.txt = value;
  }
  setInclude(value: string) {
    this.include = value;
  }

  setSlider(e: Event){
    this.slider = parseFloat((e.target as HTMLInputElement).value)
  }

  ngOnInit(): void {
  }
  submit(){
    this.include = ''
    if(this.image)
      this.include += 'image,'
    if(this.categories)
      this.include += 'categories,'
    if(this.abstract)
      this.include += 'abstract,'
    this.include = this.include.slice(0, -1)

    this.dandelionService.getPosts(this.txt, this.slider, this.include).subscribe((posts) =>{
      this.posts = posts
      console.log(this.posts)
    })
  }

}
