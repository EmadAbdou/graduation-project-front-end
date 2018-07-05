import { Component, OnInit , ViewChild, HostListener , Output  } from '@angular/core';
import { Material } from '../../material.module';
import { MatSidenav } from '@angular/material';
import { Router } from "@angular/router";


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'] ,
})
export class MenuComponent implements OnInit {

  constructor(private router: Router) { }

  @ViewChild('sidenav') sidenav: MatSidenav;
  @Output()  navMode = 'side';
  @Output()  navwidth = 200;
  @Output()  minVis = 'visible';
  @Output()  padding = 45;
  @Output() shadow = "0px" ;
  @Output() sncMleft = 0;
  @Output() sncMright = 0;
  @Output() paddingtoolp = 45 ;
  @Output() rightSideVis = 'inline-block';
  @Output() homeHide = 'none';

  Hide(){
   this.homeHide = 'none';
  }

  ngOnInit() {
      if (window.innerWidth < 768) {
      //this.navMode = 'side';
      this.navwidth = 50 ;
      this.minVis = 'hidden';
      this.rightSideVis = 'hidden';
      this.padding = 2;
      this.shadow = "0 2px 4px 0 gray, 0 3px 10px 0 gray";
      this.sncMleft = 35;
      this.sncMright = -200;
      this.paddingtoolp = 5;
    }
  }

  
     
  @HostListener('window:resize', ['$event'])

    onresize(event) {
        if (event.target.innerWidth < 768) {
           this.navMode = 'side';
           this.navwidth = 50 ;
           this.minVis = 'hidden';
           this.padding = 2 ;
           this.shadow = "0 2px 4px 0 gray, 0 3px 10px 0 gray";
           this.sncMleft = 35;
           this.sncMright = -200;
           this.paddingtoolp = 5;
           this.rightSideVis = 'hidden';

        }
        if (event.target.innerWidth > 768) {
           this.navMode = 'side';
           this.navwidth = 200 ;
           this.minVis = 'visible';
           this.rightSideVis = 'inline-block';
           this.padding = 45 ;
           this.shadow = "0px";
           this.sncMleft = 0;
           this.sncMright = 0;
           this.paddingtoolp = 45;


        }
    }
    
  }

