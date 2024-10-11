import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [ 
  ],
  imports: [ 
  ],
  providers: [],
  bootstrap: [ AuthGuardService],
})
export class AppModule { }
