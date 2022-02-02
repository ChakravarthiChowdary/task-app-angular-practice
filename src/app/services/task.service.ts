import { EventEmitter, Injectable } from '@angular/core';
import { Task } from '../models/task';

export class TaskInfo {
  constructor(
    public taskName: string,
    public taskDescription: string,
    public taskStatus: string,
    public DateCreated: string
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}
  tasks: Task[] = [
    {
      Name: 'TESTING',
      Description: 'test test test test',
      Completed: false,
      Id: 'unique',
      DateCreated: new Date().toString(),
    },
  ];
  tasksModified = new EventEmitter<Task[]>();
  taskName: string = '';
  taskDescription: string = '';
  taskStatus: string = '';
  taskInfoUpdated = new EventEmitter<TaskInfo | null>();
  taskSelected: Task | null | undefined = null;
  taskIdInEditMode = new EventEmitter<Task | null>();

  getTasks() {
    return this.tasks.slice();
  }

  createTask(task: Task) {
    task.Name = task.Name.toUpperCase();
    task.DateCreated = new Date().toString();
    this.tasks.push(task);
    this.tasksModified.emit(this.tasks);
    this.cleanTaskInfo();
  }

  updateTaskInfo(taskInfo: TaskInfo) {
    this.taskName = taskInfo.taskName;
    this.taskDescription = taskInfo.taskDescription;
    this.taskStatus = taskInfo.taskStatus;
    this.taskInfoUpdated.emit(taskInfo);
  }

  cleanTaskInfo() {
    this.taskName = '';
    this.taskStatus = '';
    this.taskDescription = '';
    this.taskInfoUpdated.emit(null);
  }

  moveTaskToEditMode(id: string) {
    this.taskSelected = this.tasks.find((task) => task.Id === id);
    this.taskIdInEditMode.emit(this.taskSelected);
  }

  updateTaskSelected(taskSelected: Task) {
    console.log('update task clicked');
    this.taskSelected = null;
    this.taskIdInEditMode.emit(null);
  }

  deleteTask(taskId: string) {
    this.tasks = this.tasks.filter((task) => task.Id !== taskId);
    this.tasksModified.emit(this.tasks);
  }
}
