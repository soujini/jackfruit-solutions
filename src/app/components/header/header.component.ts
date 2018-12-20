import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeMenu:any="home";

  constructor() { }

  ngOnInit() {

  }
  scroll(el,name) {
    this.activeMenu = name;
    el.scrollIntoView({ behavior: 'smooth', block: 'start'  });
  }
}
