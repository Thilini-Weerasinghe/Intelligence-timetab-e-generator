import { Component  } from '@angular/core';
//import {ImageService} from '../image/shared/image.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  //visibleImages : any[];

/*  constructor(private imageService : ImageService){
    this.visibleImages = this.imageService.getImages();
  }*/
}
