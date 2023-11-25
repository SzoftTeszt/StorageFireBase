import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  basePath="/feltolt"

  constructor(private storage:AngularFireStorage) { }

  pushFile(file:any){
    const fullPath=this.basePath+"/"+file.name
    const storegeRef= this.storage.ref(fullPath)

    const uploadTask=this.storage.upload(fullPath,file)
    
    uploadTask.snapshotChanges().pipe(
      finalize(
        ()=>{
          storegeRef.getDownloadURL().subscribe(
            (url)=>console.log(url)
          )
      }
      )
    )
    .subscribe(
      (res)=>console.log(res)
    )
      return uploadTask.percentageChanges()
  }
}
