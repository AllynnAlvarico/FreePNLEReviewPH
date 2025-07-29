import { Component } from '@angular/core';
import {HighlightComponent} from "./highlight/highlight.component";

@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [
    HighlightComponent
  ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {

}
