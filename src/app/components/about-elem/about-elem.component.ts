import { Component } from '@angular/core';

@Component({
  selector: 'app-about-elem',
  standalone: true,
  imports: [],
  templateUrl: './about-elem.component.html',
  styleUrl: './about-elem.component.css'
})
export class AboutElemComponent {

  aboutImage = 'assets/images/about_image.png';
  arrowRight = 'assets/icons/arrow_right.svg';

}
