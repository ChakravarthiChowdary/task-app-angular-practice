import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-taskcard',
  templateUrl: './taskcard.component.html',
  styleUrls: ['./taskcard.component.css'],
})
export class TaskcardComponent implements OnInit {
  @Input() task: Task | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {}

  editBtnClick = () => {
    if (this.task?.Id) this.taskService.moveTaskToEditMode(this.task.Id);
  };

  deleteBtnClick = () => {
    if (this.task) this.taskService.deleteTask(this.task?.Id);
  };
}
