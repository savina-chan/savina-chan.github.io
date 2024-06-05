import { Component } from '@angular/core';
import { fadeInAnimation } from 'src/assets/animations/animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeInAnimation]
})
export class AppComponent {
  title = 'portfolio';
}
