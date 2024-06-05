import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  links = [
    {icon: "assets/images/github-logo.png", href: "https://github.com/savina-chan", title: "GitHub"},
    {icon: "assets/images/linkedin-logo.png", href: "https://www.linkedin.com/in/savina-chan/", title: "LinkedIn"},
  ]
}
