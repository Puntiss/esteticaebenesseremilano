import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const MIN_STAR_ON_GOOGLE: number = 5;

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ReviewComponent {

  constructor(private router: Router) { }

  minStar = MIN_STAR_ON_GOOGLE

  faStarSolid = faStarSolid;
  faStarRegular = faStarRegular;

  star = 0;
  confirmed: boolean = false;
  sent: boolean = false;

  // Create an array with numbers from 1 to 5
  starsArray = Array.from({ length: 5 }, (_, i) => i + 1);

  chooseStar(i: number): void {
    console.log('Chosen star:', i);
    this.star = i;
  }

  confirmChoose() {
    this.confirmed = true;
    if (this.star >= this.minStar) {
      this.sent = true;
      window.location.href = "https://search.google.com/local/writereview?placeid=ChIJI5xblZjGhkcRd06Ey1DmQ7k";
    }
  }

  confirmBadReview(){
    this.sent = true
  }

}
