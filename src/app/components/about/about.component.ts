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
    "Text1":"ABOUT US",
        "BackgroundImage":"assets/images/about-new-banner.jpg",
        "AboutImage":"assets/images/P9169765.jpg",
        "AboutText":"About Rang",
        "desginerImage":"assets/images/P9169453.jpg",
        "AboutDescription":"<p>Rang is all about giving silhouettes of your imagination a colorful illustrated shape. The palate of rang holds colors beyond your thoughts. From creations to the reinventions we believe in doing both. It’s either Indian or western, ethnic or fusion we’ve done all. A line of collection which accentuate the personality of all you lovely women. </p><p>Most importantly we pride ourself being one of the few design studios who designs for kids. Designing for all those adorable little girls gives us sense of pleasure and happiness. When these little angels adorn our dresses, these dresses become more beautiful and attain their eventual purpose</p>",
        "OtherHeading":"About Designer",
        "OtherDescription":""
  }
  ngOnInit() {
    this.dataService.getHomeContent()
    .subscribe((res:Response)=>{
      this.aboutContent = res.json().about
     // console.log(this.aboutContent);
    })
  }

  getBanner(){
    return "url("+this.aboutContent.BackgroundImage+")";
  }

  getAboutImage(){
    return "url("+this.aboutContent.AboutImage+")";
  }

  getDesignerImage(){
    return "url("+this.aboutContent.desginerImage+")";
  }
  

}
