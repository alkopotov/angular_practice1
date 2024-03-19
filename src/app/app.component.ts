import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderElemComponent } from './components/header-elem/header-elem.component';
import { AboutElemComponent } from './components/about-elem/about-elem.component';
import { TestimonialElemComponent } from './components/testimonial-elem/testimonial-elem.component';
import { BlogElemComponent } from './components/blog-elem/blog-elem.component';
import { FooterElemComponent } from './components/footer-elem/footer-elem.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderElemComponent, AboutElemComponent, TestimonialElemComponent, BlogElemComponent, FooterElemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
}
