import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FileSaverModule } from 'ngx-filesaver';
import { AppComponent } from './app.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FileSaverModule,
    CodemirrorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
