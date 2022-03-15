import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SwitcherComponent } from './components/switcher/switcher.component';
import { WebcamPanelComponent } from './components/webcam-panel/webcam-panel.component';
import { SnapButtonComponent } from './components/snap-button/snap-button.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SwitcherComponent,
    WebcamPanelComponent,
    SnapButtonComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
