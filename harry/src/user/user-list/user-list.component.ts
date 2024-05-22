import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, AfterViewInit {
  @Input() title = '';
  data: any[] = [];
  @ViewChild('createBtn')
  createItem: ElementRef;
  createItmObs;

  ngOnInit(): void {

  }

  btnClicked(){
    let count = 1;
    this.createItmObs = fromEvent(this.createItem.nativeElement, 'click').subscribe(item =>{
      this.addItem(count++)
    })
  }

  ngAfterViewInit(){
    this.btnClicked();
  }

  addItem(count){
    const item = document.createElement('li');
    item.innerHTML = 'list item'+ count;
    document.getElementById('container').appendChild(item)
  }
}
