import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(
    public modalController: ModalController,
  ) { }

  ngOnInit() {
  }

  mostrarModal(){
    this.presentModal();
  }

  async presentModal() {
    //componentProps: para enviar datos al modal 
    const modal = await this.modalController.create({
      component: ModalInfoPage,
      componentProps: {
        name: 'Brandon',
        country: 'México'
      }
    });
    await modal.present();

    // Recibir data del modal
    const respPadre = await modal.onDidDismiss();     // Se recibe la data hasta que se cierra el modal
    // const respPadre = await modal.onWillDismiss(); // Se recibe antes de que se cierre el modal
    console.log( respPadre.data );
    
  }

}
