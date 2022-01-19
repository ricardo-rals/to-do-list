import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController, IonItem, ToastController } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { TasksItem } from './tasks.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  tasks: TasksItem[];

  constructor(
    private actionSheetController : ActionSheetController,
    private alertController : AlertController,
    private toastController : ToastController,
    private apiService : ApiService
  ) {}

  ngOnInit() {
      this.apiService.readData().subscribe(
        (tasks: TasksItem[]) => this.tasks = tasks
      );
  }

  deleteData(id: number){
    this.apiService.deleteData(id).subscribe(
      () => this.tasks.splice(
       this.tasks.findIndex(task => task.id !== id)
      )
    );
  }

  async openActions(task: any) {
    const actionSheet = await this.actionSheetController.create({
      header: "O QUE DESEJA FAZER?",
      buttons: [{
        text: task.done ? 'Desmarcar' : 'Marcar',
        icon: task.done ? 'radio-button-off' : 'checkmark-circle',
        handler: () => {
          task.done = !task.done;
          console.log(task);
          let { id, done } = task;
         let test = this.apiService.updateData(id, done).subscribe(
            (task: TasksItem) => this.tasks.push(task)
          );
          console.log(test);
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

   let task = { task: taskToDo, done: false };

   this.apiService.createData(task.task, task.done).subscribe(
     (task: TasksItem) => this.tasks.push(task)
   );
 }
}