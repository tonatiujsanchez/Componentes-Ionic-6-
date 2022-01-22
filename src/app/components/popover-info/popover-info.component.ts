import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent implements OnInit {

  items = [
    {
      name: 'GitHub',
      icon: 'logo-github'
    },
    {
      name: 'HTML5',
      icon: 'logo-html5'
    },
    {
      name: 'CSS3',
      icon: 'logo-css3'
    },
    {
      name: 'Javascript',
      icon: 'logo-javascript'
    },
    {
      name: 'Angular',
      icon: 'logo-angular'
    },
    {
      name: 'NodeJS',
      icon: 'logo-nodejs'
    },
  ];

  constructor( public popoverController: PopoverController ) { }

  ngOnInit() {}

  onClick( item ){
    this.popoverController.dismiss(item);
    
  }

  cerrarPopover(){
    this.popoverController.dismiss();
  }
}
