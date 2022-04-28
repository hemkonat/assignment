import { HttpClient } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { DynamicRoutesService } from 'dynamic-routes.service';
import { BehaviorSubject } from 'rxjs';

type products = {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string
};

@Component({
  selector: 'lion-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.sass']
})

export class CategoryComponent implements OnInit {

  public innerWidth$ = new BehaviorSubject<number>(window.innerHeight | 810);
  public bool = false;
  sorted: any;
  flex: any;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth$.next(window.innerWidth);
  }

  private productsUrl = 'https://fakestoreapi.com/'; 

  public products:products[] = [];

  constructor(private http: HttpClient, public lazyload: DynamicRoutesService) { }

  ngOnInit(): void {
    this.innerWidth$.subscribe(res=>{
      this.bool =res < 820 ? false:true;
    })
    this.lazyload.isLoading$.next(true);
    this.http.get(this.productsUrl+'products').subscribe((res: any) =>{
      if(res && res.length){
      this.products = [...res,...res];
      }
    });
    setTimeout(() =>{
      this.lazyload.isLoading$.next(false);
    },2000)
  }

  toggle(key: string): void {
    this.flex = key;
  }

  sort(event: any): void {
    this.sorted = event.target.value;
  }

}
