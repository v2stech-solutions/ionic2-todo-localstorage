import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormGroup, FormControl} from '@angular/forms';

import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';

@Component({
  selector: 'page-addtodo',
  templateUrl: 'addtodo.html'
})
export class AddTodoPage {

  title:any;
  description:any;

  addedToDo:any[]=[];

  

  constructor(public navCtrl: NavController,public storage: Storage) {
      
      this.storage = storage;
  }

  saveRecords():void{

    let todoObj = {
      title:"",
      description:""
    };
    todoObj.title = this.title;
    todoObj.description = this.description;


    
    console.log("ToDo Array----"+JSON.stringify(this.addedToDo));

    this.storage.get('todoDetails').then((val) => {
      console.log("Val------"+val);
      if(val){
        this.addedToDo = val;
        console.log(todoObj);
        this.addedToDo.push(todoObj);
        console.log("Added to todo----"+JSON.stringify(this.addedToDo));
        this.storage.set('todoDetails', this.addedToDo);
      }else{
        console.log(todoObj);
        this.addedToDo.push(todoObj);
        this.storage.set('todoDetails', this.addedToDo);
      }
     });
    console.log("ToDoArrayBefore-----"+this.addedToDo);
   

    this.title="";
    this.description="";

    this.navCtrl.pop();
  }

  goBack():void{
     this.navCtrl.pop();
  }

  removeItem(todo):void{

    let index = this.addedToDo.indexOf(todo);

    if(index>-1){
      this.addedToDo.splice(index,1);
      
    } 
  }

  

}
