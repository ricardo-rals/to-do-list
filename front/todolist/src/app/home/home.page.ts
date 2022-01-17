import { Component } from '@angular/core';
import { ActionSheetController, AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  tasks : any[] = []
  constructor(
    private actionSheetController : ActionSheetController,
    private alertController : AlertController,
    private toastController : ToastController
  ) {
    let tasksJson = localStorage.getItem('tasksDb');
    if (tasksJson != null) {
      this.tasks = JSON.parse(tasksJson);
    }
  }

  async openActions(task: any) {
    const actionSheet = await this.actionSheetController.create({
      header: "O QUE DESEJA FAZER?",
      buttons: [{
        text: task.done ? 'Desmarcar' : 'Marcar',
        icon: task.done ? 'radio-button-off' : 'checkmark-circle',
        handler: () => {
          task.done = !task.done;

          this.updateLocalStorage();
        }
      },
      {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  delete(task: any) {
    this.tasks = this.tasks.filter(taskArray => task != taskArray);

    this.updateLocalStorage();
  }

  updateLocalStorage() {
    localStorage.setItem('tasksDb', JSON.stringify(this.tasks));
  }

  async showAdd() {
    const alert = await this.alertController.create({
      header: 'O que deseja fazer?',
      inputs: [
        {
          name: 'taskToDo',
          type: 'text',
          placeholder: 'Comprar pão'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secundary',
          handler: () => {
            console.log('clicked cancel')
          }
        },
        {
          text: 'Adicionar',
          handler: (form) => {
            this.add(form.taskToDo)
          }
        }
      ]
    });

    await alert.present();
  }

 async add(taskToDo: string) {
   if (taskToDo.trim().length < 1) {
     const toast = await this.toastController.create({
       message: 'Informe o que deseja fazer!',
       duration: 2000,
       position: 'top'
     });
     toast.present();
     return;
   }

   let task = { name: taskToDo, done: false };

   this.tasks.push(task);

   this.updateLocalStorage();
 }
}
