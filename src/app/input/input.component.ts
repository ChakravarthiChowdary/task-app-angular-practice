import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskInfo, TaskService } from '../services/task.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnDestroy {
  constructor(private taskService: TaskService) {}

  taskInfo: TaskInfo | null = null;

  ngOnInit(): void {
    this.taskService.taskInfoUpdated.subscribe(
      (taskInfo) => (this.taskInfo = taskInfo)
    );
  }

  ngOnDestroy(): void {
    this.taskService.taskInfoUpdated.unsubscribe();
  }

  onTaskInputChange(event: any) {
    if (this.taskInfo !== null) {
      this.taskInfo.taskName = event.target.value;
      this.taskService.updateTaskInfo(this.taskInfo);
    } else {
      this.taskInfo = {
        taskName: event.target.value,
        taskDescription: '',
        taskStatus: '',
      };
      this.taskService.updateTaskInfo(this.taskInfo);
    }
  }
}
