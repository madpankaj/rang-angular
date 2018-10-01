import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( private dataService:DataService) { }
  aboutContent = {
    "Text1":"",
    "Text2":"",
    "BackgroundImage":"",
    "AboutImage":"",
    "AboutText":""
  }
  ngOnInit() {
    this.dataService.getHomeContent()
    .subscribe((res:Response)=>{
      this.aboutContent = res.json().about
      console.log(this.aboutContent);
    })
  }

  getBanner(){
    return "url("+this.aboutContent.BackgroundImage+")";
  }

  getAboutImage(){
    return "url("+this.aboutContent.AboutImage+")";
  }
}
