import { Component, TemplateRef, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AnimationOptions } from "ngx-lottie";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trabajo-ecci';
  texto: string ='';
  titulo: string = '';
  servicios: AnimationOptions = {
    path: "assets/ideas.json"

  }
  marketin:AnimationOptions ={
    path:"assets/marketin.json"
  }
  logo: AnimationOptions = {
    path: "assets/servicios.json"

  }
  trabajo: AnimationOptions = {
    path: "assets/trabajo.json"

  }
  constructor(private modalService: BsModalService) {
  }
  modalRef!: BsModalRef;
  openModal(template: TemplateRef<any>, icono: any) {
    this.tipoTextos(icono)
    this.modalRef = this.modalService.show(template, { class: 'modal-dialog-centered' });

  }
  closeVentana(): void {
    this.modalRef.hide();
  }
  tipoTextos(icono: any): any {
    switch (icono) {
      case 1:
        this.texto ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facilis quos earum at fuga velit incidunt illum soluta, libero quibusdam hic possimus quod doloremque repellendus laudantium autem tenetur ab est.';
        this.titulo = '';
        break;
      case 2:
        //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
        break;
      default:
        //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
        break;
    }
  }
}
