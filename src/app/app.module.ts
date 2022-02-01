import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { TaskcardComponent } from './taskcard/taskcard.component';
import { BgColorChangeDirective } from './directives/bgColor/bg-color-change.directive';
import { DescriptionComponent } from './description/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    SelectComponent,
    TaskcardComponent,
    BgColorChangeDirective,
    DescriptionComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatDividerModule,
    MatCardModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
