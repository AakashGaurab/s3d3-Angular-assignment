import { Injectable } from '@angular/core';
interface Product {
  title: string;
  description: string;
}
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor() { }

  todo :Product[]=[]

  additem(item:Product){
    this.todo.push(item)
  }

  

}
