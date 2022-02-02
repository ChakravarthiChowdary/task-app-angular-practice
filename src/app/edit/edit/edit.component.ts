import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TaskInfo, TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit, OnDestroy {
  @Input() task: TaskInfo | null = null;
  taskSelected: Task | null = null;
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.taskIdInEditMode.subscribe(
      (task) => (this.taskSelected = task)
    );
    this.taskService.tasksModified.subscribe((tasks) => (this.tasks = tasks));
  }

  ngOnDestroy(): void {
    this.taskService.taskIdInEditMode.unsubscribe();
    this.taskService.tasksModified.unsubscribe();
  }

  updateBtnClick = () => {
    if (this.taskSelected)
      this.taskService.updateTaskSelected(this.taskSelected);
  };
}
