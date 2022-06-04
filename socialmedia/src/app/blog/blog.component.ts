import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  constructor(private route:Router){

  }

  signup(){
    this.route.navigate(['signup']);

  }

}
