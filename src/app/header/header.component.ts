import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menu = [
    { class: "nav-item", title: "Home," },
    { class: "nav-item", title: "About" },
    { class: "nav-item", title: "Services" },
    { class: "nav-item", title: "Pricing" },
    { class: "nav-item", title: "Products" },
    { class: "nav-item", title: "Resources" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
