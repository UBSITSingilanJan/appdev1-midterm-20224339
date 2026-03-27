import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaskModel } from '../task.model';
import { TaskInfoComponent } from '../task-info-component/task-info-component';

@Component({
  selector: 'app-task-detail-component',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-detail-component.html',
  styleUrl: './task-detail-component.css',
})
export class TaskDetailComponent {}
