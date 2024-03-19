import { Component } from '@angular/core';

interface KeyFact {
  figure: number,
  unit: string,
  description: string,
}

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

  public keyFacts: KeyFact[] = [
    {figure: 15, unit: '+', description: 'Years of experience'},
    {figure: 100, unit: 'k', description: 'Students worldwide'},
    {figure: 45, unit: '+', description: 'Class subjects'},
    {figure: 98, unit: '%', description: 'Student satisfactions'}
  ]
}
