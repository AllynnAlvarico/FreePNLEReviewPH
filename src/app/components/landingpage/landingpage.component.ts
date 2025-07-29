import { Component } from '@angular/core';
import {HighlightComponent} from "./highlight/highlight.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    HighlightComponent,
    RouterLink
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

}
