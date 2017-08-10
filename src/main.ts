import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { App } from './app';
import { Main, NotesContainer } from './app/containers';
import { AppBar, NoteCard, NoteCreator} from './app/ui';

@NgModule({
 declarations: [
     App, 
     Main,
     AppBar,
     NoteCard,
     NotesContainer,
     NoteCreator
 ],
 imports: [BrowserModule, FormsModule],
 bootstrap: [App]
})
export class AppMobule{}

platformBrowserDynamic().bootstrapModule(AppMobule);
