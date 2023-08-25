import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  taskList: Array<AngularFireUploadTask> = [];

  constructor(
    private afStorage: AngularFireStorage
  ) { }

  uploadJSON(path: string, object: any): AngularFireUploadTask {
    const json = JSON.stringify(object);
    const ref = this.afStorage.ref(path);
    const task = ref.put(json);

    this.taskList.push(task);

    task.then(() => {
      const index = this.taskList.indexOf(task, 0);
      if (index > -1) {
        this.taskList.splice(index, 1);
      }
    })

    return task;
  }
}
