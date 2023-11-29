import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-images-view',
  templateUrl: './images-view.component.html',
  styleUrls: ['./images-view.component.css']
})
export class ImagesViewComponent implements OnChanges {

@Input() urls:any
viewUrls:any=[]
tombIndex=0

constructor(){
  // console.log("tömb(Urls)",this.urls)
  // this.viewUrls=this.urls.slice(0,5)
}

ngOnChanges(changes: SimpleChanges): void {
    if (changes['urls'].currentValue)
    {
      this.viewUrls=changes['urls'].currentValue.slice(0,4)
    }
}

left(){
  this.tombIndex--
  this.viewUrls=this.urls.slice(this.tombIndex,this.tombIndex+4)
}

right(){
  this.tombIndex++
  this.viewUrls=this.urls.slice(this.tombIndex,this.tombIndex+4)
}


}
