import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private dataService: DataService) {
    
   }
  homeContent = {
    "Text1":"As Ralph Lauren Said",
    "Text2":"“I don’t design cloths. I design dreams.”",
    "BackgroundImage":"assets/images/Menqn1-min.jpg",
    "AboutImage":"assets/images/P9169765.jpg",
    "AboutText":"About Rang",
    "AboutDescription":"<p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p><p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>",
    "galleryText":""
  }

  Gallery = [];

  getBanner(){
    return "url("+this.homeContent.BackgroundImage+")";
  }

  getAboutImage(){
    return "url("+this.homeContent.AboutImage+")";
  }

  ngOnInit() {
    this.dataService.getHomeContent()
    .subscribe((res:Response)=>{
      this.homeContent = res.json().home
      this.Gallery = res.json().gallery.galleryImages
    })
  }

}
