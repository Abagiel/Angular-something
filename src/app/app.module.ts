import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { TreeBlockComponent } from './components/tree-block/tree-block.component';
import { FormatFullNamePipe } from './pipes/format-full-name.pipe';
import { InfoFormComponent } from './components/info-form/info-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TreePageComponent } from './pages/tree-page/tree-page.component';
import { FamilyListComponent } from './components/family-list/family-list.component';
import { FamilyElementComponent } from './components/family-element/family-element.component';
import { HighlightGenderDirective } from './directives/highlight-gender.directive';
import { InfoBlockComponent } from './components/info-block/info-block.component';
import { InfoPComponent } from './components/info-p/info-p.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeBlockComponent,
    FormatFullNamePipe,
    InfoFormComponent,
    DashboardComponent,
    TreePageComponent,
    FamilyListComponent,
    FamilyElementComponent,
    HighlightGenderDirective,
    InfoBlockComponent,
    InfoPComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
