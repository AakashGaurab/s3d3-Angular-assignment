import { Component } from '@angular/core';
import {todo} from '../../todo'
import { TodoServiceService } from 'src/app/todo-service.service';

type todo_el = {
  title:String,
  description:String
 }

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent {
  title = ""
  description = ""
  todos = []
  
  constructor(private todoservice:TodoServiceService){
    
  }

  sub(form:any){
    const formData = {
      title: form.value.title,
      description: form.value.description
    };

    form.value.title = "";
    form.value.description = "";

    this.todoservice.additem(formData);
    console.log(this.todoservice.todo)
  }
  
  
    
}
