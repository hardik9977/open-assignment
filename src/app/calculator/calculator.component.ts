import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  monthlyIncome: any = 100000;
  monthlyExpense: any = 50000;
  constructor() { }

  ngOnInit(): void {
    
  }
  sliderChange(eve: any) {
    let sliderEle = <HTMLInputElement>document.getElementById(eve.target.id)!;
    var val = (+sliderEle.value - +sliderEle.min) / (+sliderEle.max - +sliderEle.min);
    console.log(eve.target.value);
    // console.log(eve.target.id);
    sliderEle.style.backgroundImage = '-webkit-gradient(linear, left top, right top, '
    + 'color-stop(' + val + ', #663399), '
    + 'color-stop(' + val + ', #f1f5fb)'
    + ')'
  }

}
