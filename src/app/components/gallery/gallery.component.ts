import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor( private dataService:DataService) { }
  galleryContent = {
    "Text1":"",
        "Text2":"",
        "BackgroundImage":"",
        "galleryImages":[
            [
                {"name":"Image 1", "path": "assets/images/gallery-1.jpg", "text":"Boys","description":"Test Description"},
                {"name":"Image 1", "path": "assets/images/gallery-2.jpg", "text":"Girls","description":"Test Description"}
            ],
            [
                {"name":"Image 1", "path": "assets/images/gallery-3.jpg", "text":"Boys", "description":"Test Description"},
                {"name":"Image 1", "path": "assets/images/gallery-4.jpg", "text":"Girls", "description":"Test Description"}
            ],
            [
                {"name":"Image 1", "path": "assets/images/gallery-5.jpg", "text":"Boys", "description":"Test Description"},
                {"name":"Image 1", "path": "assets/images/gallery-6.jpg", "text":"Girls", "description":"Test Description"}
            ],
            [
                {"name":"Image 1", "path": "assets/images/gallery-1.jpg", "text":"Boys", "description":"Test Description"},
                {"name":"Image 1", "path": "assets/images/gallery-2.jpg", "text":"Girls", "description":"Test Description"}
            ]
            
        ]
  }
  ngOnInit() {
    this.dataService.getHomeContent()
    .subscribe((res:Response)=>{
      this.galleryContent = res.json().gallery;
      console.log(this.galleryContent)
    })
  }

}
