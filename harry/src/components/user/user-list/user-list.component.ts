import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Observable, from, fromEvent } from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  ngOnInit(): void {
  }
}
