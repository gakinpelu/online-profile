import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  isDisplayed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  
  showModa(): void {
    this.isDisplayed = !this.isDisplayed;
  }

  alert() {
    alert("workinglsjfsjfklsjfldflsfsfjsfsfsfsdfsf lsjklfjs  lsjfkjsk dfs sfjkdf ljkfljksjf hlasjflksdjf ljsdfkjskdfj  lsjflsjfklsdj ljsadlfksl fhlsafasfk lflsdfjls lsnflsdf ljfsdflasf ")
  }

}
