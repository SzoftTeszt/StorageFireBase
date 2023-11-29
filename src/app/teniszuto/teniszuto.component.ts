import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-teniszuto',
  templateUrl: './teniszuto.component.html',
  styleUrls: ['./teniszuto.component.css']
})
export class TeniszutoComponent {
  products:any
  constructor(private base:BaseService){
    this.base.getProducts().snapshotChanges().pipe(
      map(
        (changes:any)=>changes.map(
          (c:any)=>({key:c.payload.key, ...c.payload.val()})
        )
      )
    ).subscribe(
      (data:any)=>{
        this.products=data       
      }
    )
  }
}
