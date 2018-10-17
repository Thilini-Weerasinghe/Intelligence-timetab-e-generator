import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// export class HomeComponent{
//   @HostBinding('class.is-open')
//   isOpen = false ;
//
//   toggle(){
//     this.isOpen = !this.isOpen ;
//   }
//
// }
