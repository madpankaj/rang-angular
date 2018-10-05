import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Response } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  contactForm: FormGroup;

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
     // console.log(this.contactDetails)
    })
    this.initContactForm();
  }

  getImage(){
    return "url("+this.contactDetails.backgroundImage+")";
  }
  submisstionSuccess = false;
  successMsg = "Thanks for contacting us, our team will get back to you shortly. ";
  initContactForm(){
    this.contactForm = new FormGroup({
      fname: new FormControl(null,Validators.required),
      lname: new FormControl(null,Validators.required),
      email: new FormControl(null,[Validators.required, Validators.email]),
      phoneNo: new FormControl(null,Validators.required),
      subject: new FormControl(null,Validators.required),
      comment: new FormControl(null,Validators.required)

    })
  }

  onSubmit(){
   // console.log(this.contactForm)
    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }

    setTimeout(()=>{
      this.submisstionSuccess = true;
    },2000)
    
    this.contactForm.reset();

  }
}
