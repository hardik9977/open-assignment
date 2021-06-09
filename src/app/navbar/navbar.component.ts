import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.onscroll = () => {this.scrollFunction()};
  }

  scrollFunction = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      // document.getElementById("navbar")!.style.padding = "20px 7%";
      document.getElementById("logo")!.style.height = "60px";
      document.getElementById("logo")!.style.width = "60px";
      document.getElementById("navbar")!.style.backgroundColor = "#fff";
    } else {
      // document.getElementById("navbar")!.style.padding = "30px 7%";
      document.getElementById("logo")!.style.height = "80px";
      document.getElementById("logo")!.style.width = "80px";
      document.getElementById("navbar")!.style.backgroundColor = "transparent";
    }
  }

}
