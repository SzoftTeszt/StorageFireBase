import { Component } from '@angular/core';

@Component({
  selector: 'app-upload-form',
  templateUrl: './upload-form.component.html',
  styleUrls: ['./upload-form.component.css']
})
export class UploadFormComponent {
  selectedFile:any


  selectFile(event:any){
    console.log(event.target.files[0])
    this.selectedFile=event.target.files[0]
  }
  uploadFile(){
    console.log("Én fogom feltölteni a filet!", this.selectedFile)
  }
}
