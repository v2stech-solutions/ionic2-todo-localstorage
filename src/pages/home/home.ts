import { Component } from '@angular/core';
import { NavController , NavParams } from 'ionic-angular';
import { AddTodoPage } from '../AddTodo/addtodo';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  addedToDoList:any[] = [];
  tempTodos:any = '';
  todoPage = AddTodoPage;
  constructor(public navCtrl: NavController,private navParams: NavParams,public storage: Storage ) {
     console.log("Inside constructor");
     this.storage.get('todoDetails').then((val) => {
      console.log("Val in home"+val);
      this.addedToDoList = val;
     });
  }
  testObj = {
    "title":"",
    "description": ""
  }

    ngOnInit():void{

        this.storage.get('todoDetails').then((val) => {
          console.log("Val in home init"+val);
          this.addedToDoList = val;
        }); 
    }

    ionViewWillEnter(){
          this.storage.get('todoDetails').then((val) => {
            console.log("Val in home enter"+val);
            this.addedToDoList = val;
          }); 
         
    } 

    ionViewDidEnter() {
      this.storage.get('todoDetails').then((val) => {
        console.log("Val in home enter"+val);
        this.addedToDoList = val;
      }); 
    }

  goToAddTodo():void{
      
      this.navCtrl.push(AddTodoPage);
     
  }

  removeItem(todo):void{

    let index = this.addedToDoList.indexOf(todo);

    if(index>-1){
      this.addedToDoList.splice(index,1);
      this.storage.set('todoDetails',this.addedToDoList);
    } 
  }
}
