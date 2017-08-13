import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { ApiService } from './api';

@Injectable()
export class NoteService {
    path: string = '/note';

    constructor(private api: ApiService) {}

    createNote(note) {
      return this.api.post(this.path, note);
    }

    getNotes() {
      return this.api.get(this.path);
    }

    deleteNote(note) {
      return this.api.delete(`${this.path}/${note._id}`);
    }

}