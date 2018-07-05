import { Component, Output, Input, ViewChildren } from '@angular/core';
import { MenuComponent } from './Components/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  view = "hidden";
}
