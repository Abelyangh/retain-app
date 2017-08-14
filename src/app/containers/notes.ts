import { Component } from '@angular/core';
import { NoteService } from './../services';
import { Store } from '../store';

import 'rxjs/Rx';

@Component({
   selector: 'notes-container',
   styles: [`
    .notes {
      padding-top: 50px;
    }
    .creator {
      margin-bottom: 40px;
    }
   `],
   template: `
    <div class="row center-xs notes">
      <div class="col-xs-6 creator">
        <note-creator (createNote) = "onCreateNode($event)" ></note-creator>
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card
            class="col-xs-4"
            [note]="note"
            *ngFor="let note of notes;" 
            (checkEvent)="onNoteChecked($event)"
          >
          </note-card>
        </div>
      </div>
    </div>
   `
})
export class NotesContainer {

    notes= [];

    constructor(
      private noteService: NoteService,
      private store: Store
      ) {
      this.noteService.getNotes()
      .subscribe();

      this.store.changes.pluck('notes')
      .subscribe((notes: any) => this.notes = notes);
    }

    onNoteChecked(note) {
      this.noteService.deleteNote(note)
      .subscribe();
    }

    onCreateNode(note) {
      note['color'] = 'white';
      this.noteService.createNote(note)
      .subscribe();
    }
}; 