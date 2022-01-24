import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor( public toastController: ToastController ) { }

  ngOnInit() {
  }

  toatsTop(){
    this.presentToast( 'top' );
  }

  toastMiddle(){
    this.presentToast( 'middle' );
  }

  toastBottom(){
    this.presentToast( 'bottom' );
  }


  async presentToast( position ) {
    const toast = await this.toastController.create({
      message: `It's a toast with position ${ position }`,
      duration: 2000,
      position: position
    });
    toast.present();
  }


  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      icon: 'information-circle',
      position: 'middle',
      buttons: [
        {
          side: 'start',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }


}
