import { EventEmitter, Injectable } from '@angular/core';
import { Task } from '../models/task';

export class TaskInfo {
  constructor(
    public taskName: string,
    public taskDescription: string,
    public taskStatus: string
  ) {}
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}
  tasks: Task[] = [];
  tasksModified = new EventEmitter<Task[]>();
  taskName: string = '';
  taskDescription: string = '';
  taskStatus: string = '';
  taskInfoUpdated = new EventEmitter<TaskInfo | null>();

  getTasks() {
    return this.tasks.slice();
  }

  createTask(task: Task) {
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
}
