import { Component } from '@angular/core';
import {todo} from '../../todo'
import { TodoServiceService } from 'src/app/todo-service.service';


type todo_el = {
  title:String,
  description:String
}


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
    todos : todo_el[] = []

    constructor(private todoservice:TodoServiceService){
        this.todos = todoservice.todo
    }

    // del(item:any){
    //   console.log(item)
    // }
}
