import { Component, DoCheck, Input, OnChanges, OnInit } from '@angular/core';
import { Observable, from, of } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnChanges, DoCheck {
  @Input() title = '';
  data: any[] = [];
  arr1: number[] = [1,2,3,4,5];
  arr2: string[] = ['A','B','C','D','E'];
  // myObs = new Observable((observer) => {
  //   setTimeout(() => {observer.next(1)}, 1000);
  //   setTimeout(() => {observer.next(2)}, 2000);
  //   setTimeout(() => {observer.next(3)}, 8000);
  //   setTimeout(() => {observer.complete()}, 3000);
  //   setTimeout(() => {observer.next(4)}, 4000);
  //   setTimeout(() => {observer.next(5)}, 5000);
  // })

  myPromise = new Promise((resolve)=>{
    resolve([1,2,3,4,5]);
  })

  myObs = from(this.myPromise);

  constructor(){
    console.log('Constructor is here');
  }
  ngOnChanges(){
    console.log('onChanges hook is here');
  }
  ngOnInit(): void {
    console.log('onInit hook is here');
    this.myObs.subscribe(el => {
      this.data.push(el);
    },()=>{
    }, ()=>{
    })
  }
  ngDoCheck(){
    console.log('ngDoCheck hook is here');
  }
}
