import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor( private dataService: DataService) { }
  footerContent = {"column1":{
    "headingText":"About Rang",
    "description":"Rang is all about giving silhouettes of your imagination a colorful illustrated shape. The palate of rang holds colors beyond your thoughts. From creations to the reinventions we believe in doing both.",
    "socialLinks":[
        {"text":"facebook", "class":"icon-facebook", "link":"#facebook"},
        {"text":"twitter", "class":"icon-twitter", "link":"#facebook"},
        {"text":"linkedin", "class":"icon-linkedin", "link":"#linked"}
        
    ]
},
"column2":{
    "headingText":"Information",
    "links":[
        {"text":"Home","link":"home"},
        {"text":"About","link":"about"},
        {"text":"Gallery","link":"gallery"},
        {"text":"Contact","link":"contact"}
    ]
},
"column3":{
    "headingText":"Contact Info",
    "address":"Rang Banglore",
    "phoneNo":"787878787",
    "email":"help@rang.co.in"
}}
  ngOnInit() {
    this.dataService.getHomeContent()
    .subscribe((res:Response)=>{
      this.footerContent = res.json().footer
    })
  }

}
