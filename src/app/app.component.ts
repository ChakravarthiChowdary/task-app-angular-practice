import { Component, OnDestroy, OnInit } from '@angular/core';
import { Task } from './models/task';
import { TaskInfo, TaskService } from './services/task.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as uuid from 'uuid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'task-app-material-ui';
  tasks: Task[] = [];
  taskInfo: TaskInfo | null = null;

  constructor(
    private tasksService: TaskService,
    private _snackBar: MatSnackBar
  ) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);

    setTimeout(() => {
      this._snackBar.dismiss();
    }, 2000);
  }

  ngOnInit(): void {
    this.tasks = this.tasksService.getTasks();
    this.tasksService.tasksModified.subscribe((tasks) => (this.tasks = tasks));
    this.tasksService.taskInfoUpdated.subscribe(
      (taskInfo) => (this.taskInfo = taskInfo)
    );
  }

  ngOnDestroy(): void {
    this.tasksService.tasksModified.unsubscribe();
    this.tasksService.taskInfoUpdated.unsubscribe();
  }

  onCreateBtnClick() {
    if (
      this.taskInfo &&
      this.taskInfo.taskName !== '' &&
      this.taskInfo.taskDescription !== '' &&
      this.taskInfo.taskStatus !== ''
    ) {
      this.tasksService.createTask({
        Name: this.taskInfo.taskName,
        Description: this.taskInfo.taskDescription,
        Completed: this.taskInfo.taskStatus === 'completed',
        Id: uuid.v4(),
        DateCreated: '',
      });
    } else {
      this.openSnackBar('Cannot leave any field empty !', 'OK');
    }
  }
}
