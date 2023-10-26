import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AuthGuard} from "../../auth.guard";
import {TokenComponent} from "./token/token.component";
import {EntityExtractionComponent} from "./entity-extraction/entity-extraction.component";
import {TextSimilarityComponent} from "./text-similarity/text-similarity.component";
import {LanguageDetectionComponent} from "./language-detection/language-detection.component";
import {SentimentAnalysisComponent} from "./sentiment-analysis/sentiment-analysis.component";
import {HistoryComponent} from "./history/history.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "token",
    component: TokenComponent
  },
  {
    path: "e-extraction",
    component: EntityExtractionComponent
  },
  {
    path: "t-similarity",
    component: TextSimilarityComponent
  },
  {
    path: "l-detection",
    component: LanguageDetectionComponent
  },
  {
    path: "s-analysis",
    component: SentimentAnalysisComponent
  },
  {
    path: "history",
    component: HistoryComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
