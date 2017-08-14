import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { ApiService } from './api';
import { StoreHelper } from './storeHelper';

@Injectable()
export class NoteService {
    path: string = '/note';

    constructor(private api: ApiService, private storeHelper: StoreHelper) {}

    createNote(note) {
      return this.api.post(this.path, note)
                 .do(saveNote => this.storeHelper.add('notes', saveNote));
    }

    getNotes() {
      return this.api.get(this.path)
                     .do(res => this.storeHelper.update('notes', res.data));
    }

    deleteNote(note) {
      return this.api.delete(`${this.path}/${note._id}`)
                     .do(res => this.storeHelper.findAndDelete('notes', res._id));
    }

}