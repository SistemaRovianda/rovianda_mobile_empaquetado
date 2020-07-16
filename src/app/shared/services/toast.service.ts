import { Injectable } from "@angular/core";
import { ToastController } from "@ionic/angular";

@Injectable({
  providedIn: "root",
})
export class ToastService {
  constructor(private toastCtrl: ToastController) {}

  async success() {
    const toast = await this.toastCtrl.create({
      message: "Atendida con éxito",
      duration: 3000,
      color: "success",
    });
    toast.present();
  }

  async errorToast() {
    const toast = await this.toastCtrl.create({
      message: "Error en la operación",
      duration: 2000,
      color: "danger",
    });

    toast.present();
  }
}
