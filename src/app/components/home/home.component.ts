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
    "Text1":"Heading",
    "Text2":"Custom clothing By Rang",
    "BackgroundImage":"",
    "AboutImage":"",
    "AboutText":""
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
