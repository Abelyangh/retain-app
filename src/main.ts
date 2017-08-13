import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { App, providers, routers } from './app';
import { Main, NotesContainer, About} from './app/containers';
import { AppBar, NoteCard, NoteCreator} from './app/ui';

@NgModule({
 declarations: [
     App, 
     Main,
     AppBar,
     NoteCard,
     NotesContainer,
     About,
     NoteCreator,
 ],
 providers,
 imports: [BrowserModule, FormsModule, HttpModule, routers],
 bootstrap: [App]
})
export class AppMobule{}

platformBrowserDynamic().bootstrapModule(AppMobule);
