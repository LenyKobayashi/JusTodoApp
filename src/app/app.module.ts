import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {Routes} from '@angular/router';
import {TacheViewComponent} from './tache-view/tache-view.component';
import { TodoDataService } from './todo-data.service';
import { TacheItemComponent } from './tache-item/tache-item.component';



const appRoutes:  Routes = [




];



@NgModule({
  declarations: [
    AppComponent,
    TacheViewComponent,
    TacheItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TodoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
