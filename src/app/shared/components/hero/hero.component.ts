import {AfterViewInit, Component, HostListener, OnInit} from '@angular/core';
import {stickyNav} from "../../animations/animations";
import {element} from "protractor";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  animations: [stickyNav]
})
export class HeroComponent implements OnInit, AfterViewInit {
  isSticky: boolean;

  @HostListener('window:scroll', ['$event'])
  onScroll(e) {
    window.scrollY > 30 ? this.isSticky = true : this.isSticky = false;
  };

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    if(navbarBurgers.length > 0 ) {
      navbarBurgers.forEach((element) => {
        element.addEventListener('click', () => {
          let targetTemp = element.dataset.target;
          let target = document.getElementById(targetTemp);

          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          element.classList.toggle('is-active');
          target.classList.toggle('is-active');
        });
      });
    }
  }


}
