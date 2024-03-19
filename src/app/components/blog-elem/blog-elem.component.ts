import { Component } from '@angular/core';

interface Blog {
  id: number,
  author: string,
  imageSrc: string,
  date: string,
  title: string

}

@Component({
  selector: 'app-blog-elem',
  standalone: true,
  imports: [],
  templateUrl: './blog-elem.component.html',
  styleUrl: './blog-elem.component.css'
})
export class BlogElemComponent {

  public blogList: Blog[] = [
    {id: 1, author: 'Tom Kennedy', imageSrc: 'assets/images/blog_1.jpg', date: 'Feb 23, 2024', title: 'Lorem ipsum dolor sit amet consectetur.'},
    {id: 2, author: 'Tom Kennedy', imageSrc: 'assets/images/blog_2.jpg', date: 'Feb 10, 2024', title: 'Lorem ipsum dolor sit amet consectetur.'},
    {id: 3, author: 'Tom Kennedy', imageSrc: 'assets/images/blog_3.jpg', date: 'Feb 02, 2024', title: 'Lorem ipsum dolor sit amet consectetur.'}
  ]

  public userIcon: string = 'assets/icons/user.svg';
  public calendarIcon: string = 'assets/icons/calendar.svg';
  public arrowBlack: string = 'assets/icons/arrow_2.svg';
  public arrowRight: string = 'assets/icons/arrow_right.svg'
}
