import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards = [{
    image: "../assets/Get Paid Instantly.png",
    title: "Quick cash disbursement",
    contain: "Get terms loans that your business needs within 72 hrs"
  },
  {
    image: "../assets/Low interest rate.png",
    title: "Low-interest rate",
    contain: "Achieve your financial goals with an amazing interest rate starting at 13% per annum"
    },
    {
      image: "../assets/Secure Payments.png",
      title: "Zero Paperwork",
      contain: "Get started instantly by submitting only your basic details & bank statements"
    }]
  
    loanCards = [{
      image: "../assets/freelancer_feature_icon_6@1.5x.png",
      title: "Ace your business finances",
      contain: "Manage banking, accounting & everything in between, on one platform"
    },
    {
      image: "../assets/Covid.png",
      title: "Loans to fight COVID-19",
      contain: "Zero EMI for first 3 months on Back-to-Business loans of upto 1 lakh"
      }]
  constructor() { }
}
