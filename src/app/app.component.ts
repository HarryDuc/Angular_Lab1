import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { kMaxLength } from 'node:buffer';
import { min } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lab1';
  name: String = "Truong cao dang cong nghe thong tin.";
  years: number = new Date().getFullYear() - 2000;
  read: boolean = false;
  disabled: boolean = false;
  toggleDisabled() {
    this.disabled = !this.disabled;
  }
  myClick() {
    alert('Message');
  }

  a: number = 0;
  b: number = 0;
  kq: number = 0;
  phepTinh: String = ''
  Calculator() {
    switch (this.phepTinh) {
      case '+':
        this.kq = Number(this.a) + Number(this.b);
        break;
      case '-':
        this.kq = Number(this.a) - Number(this.b);
        break;
      case '*':
        this.kq = Number(this.a) * Number(this.b);
        break;
      case '/':
        this.kq = Number(this.a) / Number(this.b);
        break;
      case 'Max':
        this.kq = Math.max(Number(this.a), Number(this.b))
        break;
    }
  }
  a1: string = '';
  b1: string = '';
  c1: string = '';
  Smax: number = 0;
  max() {
    var max = parseInt(this.a1);
    if (parseInt(this.b1) > max) {
      var max = parseInt(this.b1);
    }
    if (parseInt(this.c1) > max) {
      max = parseInt(this.c1);
      console.log('c = ' + this.c1);
    }
    return max;
  }

  a2: number = 0;
  b2: number = 0;
  c2: number = 0;
  min: number = 0;
  avg: number = 0;
  max1: number = 0;

  sapxep() {
    var temp = 0;
    var arr = [this.a2, this.b2, this.c2];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]){
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
    }
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];
      arr[index] = element;
      console.log(arr[index])
    }
    return arr;
  }

  // giai phuong trinh bac 1
  x: number = 0;
  y: number = 0;
  rexy: number = this.y/this.x;
  da1: string = '';
  ptb1() {
    if (this.x == 0) {
      if (this.y == 0) {
        this.da1 = 'Phuong trinh bac 1 co vo so nghiem.'
      }else {
        this.da1 = 'Phuong trinh bac 1 vo nghiem.'
      }
    }else {
      this.da1 = 'Phuong trinh bac 1 co nghiem: '+ (-this.y/this.x);
    }
    return this.da1;
  }

  // phuong trinh bac 2
  x1: number = 0;
  y2: number = 0;
  z: number = 0;
  delta: number = 0;
  reb2: string = '';
  ptb2() {
    this.delta = (this.y2 * this.y2) - (4 * this.x1 * this.z);
    if (this.delta == 0) {
        this.reb2 = 'Phuong trinh co nghiem kep x1 = x2 = ' + ((-this.y2)/(this.a2 * 2));
    }else {
      if (this.delta < 0) {
        this.reb2 = 'Phuong trinh vo nghiem.'
      }else {
        this.reb2 = 'Phuong trinh co 2 nghiem phan biet la x1 = ' + (((-this.y2 + Math.sqrt(this.delta))/(this.x1 * 2))) + '   ' + 'x2 = ' + (((-this.y2 - Math.sqrt(this.delta))/(this.x1 * 2)))
      }
    }
    return this.reb2;
  }
  bai: number = 0;
}