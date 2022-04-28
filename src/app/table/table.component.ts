import { Component, OnInit } from '@angular/core';
import student from '../../assets/student.json';

@Component({
  selector: 'lion-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass'],
})
export class TableComponent implements OnInit {
  students = student.students;
  tableObject: any = {};
  sortDir: number = 1;

  constructor() {}

  ngOnInit(): void {
    this.tableObject = {
      headers: Object.keys(this.students[0]),
      data: [...this.students],
    };
  }

  onSortClick(event: any, col: any) {
    let target = event.target.children.length
      ? event.target.children[0]
      : event.currentTarget;
    let classList = target.classList;

    if (classList.contains('fa-chevron-up')) {
      classList.remove('fa-chevron-up');
      classList.add('fa-chevron-down');
      this.sortDir = 1;
    } else if (classList.length === 1) {
      classList.add('fa-chevron-up');
      this.sortDir = -1;
    } else {
      classList.remove('fa-chevron-down');
      this.tableObject.data = this.students;
      return;
    }
    this.sortArr(col);
  }

  sortArr(colName: any) {
    this.tableObject.data.sort((a: any, b: any) => {
      if (typeof a[colName] === 'string') {
        a = a[colName].toLowerCase();
        b = b[colName].toLowerCase();
        return a.localeCompare(b) * this.sortDir;
      } else {
        a = a[colName];
        b = b[colName];
        return (a - b) * this.sortDir;
      }
    });
  }
}
