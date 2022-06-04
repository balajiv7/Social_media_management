import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit  {
  ngOnInit(): void {
    console.log("News Page")
  }
  constructor(private route:Router) {

  }

opennews() {
 window.location.href='https://www.investopedia.com/best-social-media-management-software-5087716'
}

}
