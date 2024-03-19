import { Component } from '@angular/core';

interface Testimonial {
  id: number,
  author: string,
  spec: string,
  rating: string,
  text: string
}

@Component({
  selector: 'app-testimonial-elem',
  standalone: true,
  imports: [],
  templateUrl: './testimonial-elem.component.html',
  styleUrl: './testimonial-elem.component.css'
})
export class TestimonialElemComponent {

  public testimonialList: Testimonial[] = [
    {id: 1, author: 'Michael Wong', spec: 'UI/UX Design Student', rating: '4.9', text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!'},
    {id: 2, author: 'Avril Song', spec: 'Web Development Student', rating: '4.8', text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!'},
    {id: 3, author: 'Jeane Wood', spec: 'Data Science Student', rating: '5.0', text: 'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!'}
  ]

  public starIcon: string = 'assets/icons/star.svg'

}
