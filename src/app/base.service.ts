import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  basePath="/feltolt"
  dbRef:any
  constructor(private storage:AngularFireStorage, private db: AngularFireDatabase) {
    this.dbRef=this.db.list(this.basePath)
  }

  getData(){
    return this.dbRef
  }

  addFileData(fname:any, fsUrl:any){
    const data= {name:fname, url:fsUrl}
    this.dbRef.push(data)

  }

  pushFile(file:any){
    const fullPath=this.basePath+"/"+file.name
    const storegeRef= this.storage.ref(fullPath)

    const uploadTask=this.storage.upload(fullPath,file)
    
    uploadTask.snapshotChanges().pipe(
      finalize(
        ()=>{
          storegeRef.getDownloadURL().subscribe(
            (url)=>{
              this.addFileData(file.name,url)
              // console.log(url)
            }
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
