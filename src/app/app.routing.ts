import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ServicesComponent } from "./components/services/services.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { NgModule } from "@angular/core";

const appRoutes:Routes = [
    { path:'',component:HomeComponent},
    { path:'about-us', component:AboutComponent},
    { path:'contact-us',component:ContactComponent},
    { path:'services',component:ServicesComponent},
    { path:'gallery', component:GalleryComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRouting {}