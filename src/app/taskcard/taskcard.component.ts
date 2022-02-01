import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../models/task';

@Component({
  selector: 'app-taskcard',
  templateUrl: './taskcard.component.html',
  styleUrls: ['./taskcard.component.css'],
})
export class TaskcardComponent implements OnInit {
  @Input() task: Task | null = null;

  constructor() {}

  ngOnInit(): void {}
}
