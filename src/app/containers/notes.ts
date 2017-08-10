import { Component } from '@angular/core';

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
        note creator here
      </div>
      <div class="notes col-xs-8">
        <div class="row between-xs">
          <note-card
            class="col-xs-4"
            [note]="note"
            *ngFor="let note of notes; let i= index" 
            (checkEvent)="onNoteChecked(i)"
          >
          </note-card>
        </div>
      </div>
    </div>
   `
})
export class NotesContainer {
    notes= [{ 
        'title': 'question1',
        'value': 'can\'t resolve the relative path',
        'color': 'lightblue'
    },
    { 
        'title': 'question2',
        'value': 'can\'t resolve the relative path',
        'color': 'red'
    },
    { 
        'title': 'question3',
        'value': 'can\'t resolve the relative path',
        'color': 'green'
    }];
    onNoteChecked(i: number) {
      this.notes.splice(i, 1);
    }
}; 