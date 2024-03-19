import { Component } from '@angular/core';

@Component({
  selector: 'app-footer-elem',
  standalone: true,
  imports: [],
  templateUrl: './footer-elem.component.html',
  styleUrl: './footer-elem.component.css'
})
export class FooterElemComponent {
  logoIcon: string = 'assets/icons/main_logo.svg';
  logoFB: string = 'assets/icons/facebook.svg';
  logoTwit: string = 'assets/icons/twitter.svg';
  logoInsta: string = 'assets/icons/instagram.svg';
  logoLinked: string = 'assets/icons/linkedin.svg';
  logoYT: string = 'assets/icons/youtube.svg';

}
