import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { NgModule } from "@angular/core";

const appRoutes:Routes = [
    { path:'',component:HomeComponent},
    { path:'about-us', component:AboutComponent},
    { path:'connect',component:ContactComponent},
    { path:'portfolio', component:GalleryComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRouting {}