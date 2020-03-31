import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule ,routing} from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingformComponent } from './bookingform/bookingform.component';
import { FooterComponent } from './footer/footer.component';
import { FormComponent } from './form/form.component';
import { HeadingComponent } from './heading/heading.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ServicesComponent } from './services/services.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule ,
  MatMenuModule,MatIconModule,MatGridListModule,MatDatepickerModule,MatCheckboxModule,
  MatFormFieldModule,MatNativeDateModule, MatDatepicker,} from '@angular/material';
  import { UserRegistrationService } from './user-registration.service';
  import { HttpClientModule } from '@angular/common/http';
import { AllComponent } from './all/all.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ProductComponent } from './component/product/product.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductService } from './servicess/product.service';
import { BarComponent } from './bar/bar.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BillComponent } from './component/bill/bill.component';
import { BoookformComponent } from './boookform/boookform.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserLoginService } from './user-login.service';
import { UserRegistrationsService } from './user-registrations.service';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    BookingformComponent,
    FooterComponent,
    FormComponent,
    HeadingComponent,
    ImageSliderComponent,
    LoginComponent,
    NavbarComponent,
    ReviewsComponent,
    ServicesComponent,
    AllComponent,
    RoomsComponent,
    ProductComponent,
    CartComponent,
    BarComponent,
    AboutusComponent,
    BillComponent,
  BoookformComponent,
  SignUpComponent,
  HomeComponent,

 
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatIconModule,
    MatMenuModule,
    MatCheckboxModule,
   MatGridListModule,
   MatDatepickerModule,
   MatFormFieldModule,
   MatNativeDateModule,
   HttpClientModule,
   routing
    

    
  ],
  providers: [UserRegistrationService,UserLoginService,UserRegistrationsService,ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
