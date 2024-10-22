import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  counter: any = [];
  constructor() {}
  ngOnInit(): void {
    this.myNav();
  }
  myNav() {
    //Click Button In Mobile
    const bar = document.getElementById('bar');
    const nav: any = document.getElementById('navbar');
    const close = document.getElementById('close');
    if (bar) {
      bar.onclick = () => {
        bar.addEventListener('click', () => {
          nav.classList.add('active');
        });
      };
      if (close) {
        close.onclick = () => {
          nav?.classList.remove('active');
        };
      }
    }
  }
  top() {
    window.scrollTo({ top: 0 });
  }
}
