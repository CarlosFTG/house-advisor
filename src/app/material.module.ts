import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import {MatButtonModule} from '@angular/material/button'
 import {MatFormFieldModule} from '@angular/material/form-field';
 import {MatInputModule} from '@angular/material/input';
 import {MatSlideToggleModule} from '@angular/material/slide-toggle';
 import {MatExpansionModule} from '@angular/material/expansion';
 import {MatTableModule} from '@angular/material/table';
 import {MatDialogModule} from '@angular/material/dialog';
 import {MatAutocompleteModule} from '@angular/material/autocomplete';
 import {MatSelectModule} from '@angular/material/select';
 import {MatIconModule} from '@angular/material/icon';
 import {MatTooltipModule} from '@angular/material/tooltip';
 import {MatTabsModule} from '@angular/material/tabs';
 import {MatToolbarModule} from '@angular/material/toolbar';
 import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports:[
     MatButtonModule,
     MatFormFieldModule,
     MatInputModule,
     MatSlideToggleModule,
     MatExpansionModule,
     MatTableModule,
     MatDialogModule,
     MatAutocompleteModule,
     MatSelectModule,
     MatIconModule,
     MatTooltipModule,
     MatTabsModule,
     MatToolbarModule,
     MatSnackBarModule
]
})
export class MaterialModule { }
