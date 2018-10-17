import { Component, OnInit } from '@angular/core';
import {
  AccessibilityConfig, Action, AdvancedLayout, ButtonEvent, ButtonsConfig, ButtonsStrategy, ButtonType, Description, DescriptionStrategy, GalleryService,
  DotsConfig, GridLayout, Image, ImageModalEvent, LineLayout, PlainGalleryConfig, PlainGalleryStrategy, PreviewConfig
} from 'angular-modal-gallery';
import { DataService } from '../../data.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor( private dataService:DataService) { }
  Gallery = [];
 

 
  plainGalleryGrid: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.GRID,
    layout: new GridLayout({ width: '337px', height: '444px' }, { length: 4, wrap: true })
  };



  customPlainGalleryRowDescConfig: PlainGalleryConfig = {
    strategy: PlainGalleryStrategy.CUSTOM,
    layout: new AdvancedLayout(-1, true)
  };
  
  openImageModalRowDescription(image: Image) {
    console.log('Opening modal gallery from custom plain gallery row and description, with image: ', image);
    const index: number = this.getCurrentIndexCustomLayout(image, this.images);
    this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
  }

  private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
    return image ? images.indexOf(image) : -1;
  };


  images: Image[] = [];
   imgGallery = [];
  initImages(){
   
    for(let i = 0; i < this.Gallery.length; i++){
      console.log(this.Gallery[i].path)
      this.imgGallery.push( new Image(i, {
        img: this.Gallery[i].path,
        description: this.Gallery[i].description
      })) 
    }
  }

  ngOnInit() {
  
    this.dataService.getHomeContent()
    .subscribe((res:Response)=>{
    //  console.log(res.json().gallery.galleryImages)
      this.Gallery = res.json().gallery.galleryImages
      this.initImages();
      this.images = this.imgGallery;
    //  console.log(this.images);
    //  console.log(this.imgGallery);
    })

    
  }

}
