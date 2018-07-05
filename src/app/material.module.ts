import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from "@angular/material/icon";
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';






@NgModule({
  imports: [
      MatToolbarModule,
      MatMenuModule,
      MatIconModule,
      MatButtonModule,
      BrowserAnimationsModule,
      MatSidenavModule,
      MatInputModule,
      MatExpansionModule,
      MatCardModule,
      MatDividerModule,
      MatTooltipModule,
      MatFormFieldModule,
      FormsModule,
      ReactiveFormsModule,


      
          ],
  exports: [
      MatToolbarModule,
      MatMenuModule,
      MatIconModule,
      MatButtonModule,
      BrowserAnimationsModule,
      MatSidenavModule,
      MatInputModule,
      MatExpansionModule,
      MatCardModule,
      MatDividerModule,
      MatTooltipModule,
      MatFormFieldModule,
      


      
     
            ],
})
export class Material { }
