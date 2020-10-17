import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShowcaseComponent } from './components/showcase/showcase.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { TitleCardComponent } from './components/title-card/title-card.component';
import { ContactComponent } from './components/contact/contact.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { DataService } from './services/data.service';
import { HomecardComponent } from './components/homecard/homecard.component';
import { EuroPipe } from './pipes/euro.pipe';
import { MySlicePipe } from './pipes/myslice.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ShowcaseComponent,
    CarouselComponent,
    TitleCardComponent,
    ContactComponent,
    HomecardComponent,
    EuroPipe,
    MySlicePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBnEwzHk0tZNUck5FPZeqTTFGx2HD33qlU'
    })
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
