import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import data from '../../assets/dynamicRoutes.json';
import { DynamicRoutesService } from '../dynamic-routes.service';
@Component({
  selector: 'lion-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  data = data.routes;
  id: number | undefined;
  constructor(private router: Router, public lazyload: DynamicRoutesService) { }

  ngOnInit(): void {
  }

  lazyLoadRoute(routes: any, index: number): void {
    this.id = index;
    this.lazyload.isLoading$.next(true);
    if(this.router.config.filter(res=>res.path === routes.route).length===0){
    this.lazyload.loadLazyModules(routes).subscribe((response: any)=>{
      const config = this.router.config;
      const obj = {
        path: routes.route,
        loadChildren: () => this.lazyload.getLazyModule(routes.route)
      };
      config.splice(config.length-1,0,obj);
      this.router.resetConfig(config);
      this.lazyload.isLoading$.next(false);
      this.router.navigate([routes.route]); 
      this.lazyload.initialRouterConfig$.next(config.slice(1,config.length-1));
    })
  }else {
    this.lazyload.isLoading$.next(true);
    setTimeout(()=>{
      this.lazyload.isLoading$.next(false);
    this.router.navigate([routes.route]); 
    },2000)
  }
  }

}
