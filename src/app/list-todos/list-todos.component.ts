import { Component, OnInit } from '@angular/core';


export class Todo{
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){
  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos = [
    new Todo(1, 'Learn to play Guitar', false, new Date()),
    new Todo(2, 'Learn Angular', false, new Date()),
    new Todo(3, 'Meditate Levitate', false, new Date()),
    new Todo(4, 'Travel', false, new Date()),


    // {id : 1, description: 'Learn to play Guitar'},
    // {id : 2, description: 'Learn Angular'},
    // {id : 3, description: 'Meditation'},
    // {id : 4, description: 'Visit Nepal'}

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
