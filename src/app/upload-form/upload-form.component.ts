import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent {
  selectedFile:any
  upload=false
  percentage=0

  constructor(private base:BaseService){}

  selectFile(event:any){
    console.log(event.target.files[0])
    this.selectedFile=event.target.files[0]
    this.upload=false
    this.percentage=0
  }
  uploadFile(){
    console.log("Én fogom feltölteni a filet!", this.selectedFile)
    this.upload=true
    this.base.pushFile(this.selectedFile).subscribe(
      (res)=>{
        console.log(res,"%")
        this.percentage=Math.round(Number(res))
      }
    )
  }
}
