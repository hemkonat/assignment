import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'lion-dynamic-div',
  templateUrl: './dynamic-div.component.html',
  styleUrls: ['./dynamic-div.component.sass'],
})
export class DynamicDivComponent implements OnInit {
  public alertText!: string;
  public dynamicArray = Array.from({ length: 10 });
  public bool = false;
  public timeout: any;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: any) {
    if (window.pageYOffset + window.innerHeight >= document.documentElement.scrollHeight-1 ) {
      this.dynamicArray.push(undefined);
  }
  }

  constructor() {
this.setTimer();
  }

  ngOnInit(): void {}

  alert(index: number) {
    clearTimeout(this.timeout);
    this.alertText = `Button ${index + 1} is clicked`;
    this.bool = true;
    this.setTimer();
  }

  setTimer(): void {
    this.timeout = setTimeout(() => {
      this.bool = false;
    }, 3000);
  }
}
