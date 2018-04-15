import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from '../environments/environment';
import {ReactiveFormsModule} from "@angular/forms";
import {ScrollToModule} from 'ng2-scroll-to';
import {SharedModule} from "./shared/shared.module";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { PortfolioComponent } from './portfolio/portfolio.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';
import {NavComponent} from "./nav/nav.component";
import {ImagesCarouselComponent} from "./portfolio/images-carousel/images-carousel.component";
import {NgxCarouselModule} from "ngx-carousel";

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    HeroComponent,
    HomeComponent,
    NavComponent,
    ImagesCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    NgxCarouselModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    SharedModule.forRoot(),
    ScrollToModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
