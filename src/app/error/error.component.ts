import { Component, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { routes } from '../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css',
  encapsulation: ViewEncapsulation.None
})
export class ErrorComponent implements OnInit {

  private countdownTimer: any;
  private redirectTimer: any;
  remainingTime: number = 9;

  constructor(private router: Router) {}

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
    }
    if (this.redirectTimer) {
      clearTimeout(this.redirectTimer);
    }
  }

  startCountdown() {
    this.countdownTimer = setInterval(() => {
      this.remainingTime--;
      console.log(`Redirecting in ${this.remainingTime} seconds...`);
      if (this.remainingTime <= 0) {
        clearInterval(this.countdownTimer);
      }
    }, 1000);

    this.redirectTimer = setTimeout(() => {
      this.router.navigateByUrl('/home');
    }, 10000);
  }
}
