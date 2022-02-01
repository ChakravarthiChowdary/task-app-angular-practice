import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskInfo, TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent implements OnInit, OnDestroy {
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

  onTaskDescriptionChange(event: any) {
    if (this.taskInfo !== null) {
      this.taskInfo.taskDescription = event.target.value;
      this.taskService.updateTaskInfo(this.taskInfo);
    } else {
      this.taskInfo = {
        taskName: '',
        taskDescription: event.target.value,
        taskStatus: '',
      };
      this.taskService.updateTaskInfo(this.taskInfo);
    }
  }
}
