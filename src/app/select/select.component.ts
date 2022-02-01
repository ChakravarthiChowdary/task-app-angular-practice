import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskInfo, TaskService } from '../services/task.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent implements OnInit, OnDestroy {
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

  onTaskStatusChange(event: any) {
    if (this.taskInfo !== null) {
      this.taskInfo.taskStatus = event.value;
      this.taskService.updateTaskInfo(this.taskInfo);
    } else {
      this.taskInfo = {
        taskStatus: event.value,
        taskDescription: '',
        taskName: '',
      };
      this.taskService.updateTaskInfo(this.taskInfo);
    }
  }
}
