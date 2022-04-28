import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicRoutesService {
  private lazyMap: Map<string, Promise<unknown>> = new Map();   
  public initialRouterConfig$ = new BehaviorSubject<any>([]);
  public isLoading$ = new BehaviorSubject(false);
  public logsArray$ = new BehaviorSubject<any>([]);
  public logsTrack$ =  new BehaviorSubject({'started':0, 'paused':0, 'reset':0});
  public couteraction$ = new BehaviorSubject({action:'', value:'', time: new Date(), key:''});
  public count$ = new BehaviorSubject(0);
  public buttonBool$ = new BehaviorSubject(true);
  public pausedLogs$ = new BehaviorSubject<any>([]);
  constructor() {}


  getLazyModule(key: string): any{
    return this.lazyMap.get(key);
  };

  loadLazyModules(route: any): Observable<number | void> {
    return of(1).pipe(
      delay(2000),
      tap(() => {
        switch(route.route){
          case 'nested-box':
            this.lazyMap.set(
              route.route,
              import('nested/nested.module').then((m) => m.NestedModule)
            );
          break;
          case 'category':
            this.lazyMap.set(
              route.route,
              import('category/category.module').then((m) => m.CategoryModule)
            );
          break;
          case 'timer-sibling':
            this.lazyMap.set(
              route.route,
              import('timer-sibling/timer-sibling.module').then((m) => m.TimerSiblingModule)
            );
          break;
          case 'timer-subject':
            this.lazyMap.set(
              route.route,
              import('timer-subject/timer-subject.module').then((m) => m.TimerSubjectModule)
            );
          break;
          case 'table':
            this.lazyMap.set(
              route.route,
              import('table/table.module').then((m) => m.TableModule)
            );
            break;
          case 'dynamic-div':
            this.lazyMap.set(
              route.route,
              import('dynamic-div/dynamic-div.module').then((m) => m.DynamicDivModule)
            );
          break;
        }
      })
    );
  }
}
