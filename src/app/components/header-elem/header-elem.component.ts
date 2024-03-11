import { Component } from '@angular/core';

@Component({
  selector: 'app-header-elem',
  standalone: true,
  imports: [],
  templateUrl: './header-elem.component.html',
  styleUrl: './header-elem.component.css'
})
export class HeaderElemComponent {
  logoIcon = 'assets/icons/main_logo.svg';

  menuItemsList = [
    'About us',
    'Our Class',
    'Blog',
    'Contact'
  ]

}
