import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor( private dataService:DataService) { }
  contactDetails = {
    "backgroundImage":"assets/images/contact.jpg",
    "headingText":"Contact Info",
    "address":"Bangalore",
    "phoneNo":"0810 900 0626",
    "email":"info@rangdesigns.in"
  }
  ngOnInit() {
    this.dataService.getHomeContent()
    .subscribe((res:Response)=>{
      this.contactDetails = res.json().footer.column3
      console.log(this.contactDetails)
    })
  }

  getImage(){
    return "url("+this.contactDetails.backgroundImage+")";
  }
}
