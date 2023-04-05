import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './components/comments/comments.component';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ShortenPipe } from './pipes/shorten.pipe';
import { UsernamePipe } from './pipes/username.pipe';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';



@NgModule({
  declarations: [
    CommentsComponent,
	ShortenPipe,
	UsernamePipe,
	TimeAgoPipe,
	HighlightDirective
  ],
  imports: [
    CommonModule,
	MaterialModule,
	ReactiveFormsModule
  ],
  exports: [
   CommentsComponent,
   MaterialModule,
   ReactiveFormsModule,
   ShortenPipe,
   UsernamePipe,
   TimeAgoPipe,
   HighlightDirective,
   MatCheckboxModule,
   MatRadioModule
  ]
})
export class SharedModule { }
