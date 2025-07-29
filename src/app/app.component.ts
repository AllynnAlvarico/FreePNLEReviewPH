import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LandingpageComponent} from "./components/landingpage/landingpage.component";
import {FooterComponent} from "./components/footer/footer.component";
import {NavbarComponent} from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingpageComponent, FooterComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FreePLNE Review PH';
}
