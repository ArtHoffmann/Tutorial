import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {
   MatButtonModule,
   MatCardModule,
   MatIconModule,
   MatInputModule,
   MatListModule,
   MatMenuModule,
   MatProgressBarModule,
   MatSelectModule,
   MatTooltipModule,
   MatDialogModule,
   MatGridListModule,
   MatTabsModule,
   MatStepperModule,
   MatSnackBarModule,
   MatPaginatorModule,
   MatCheckboxModule,
   MatExpansionModule,
   MatNativeDateModule,
   MatDatepickerModule,
   MatProgressSpinnerModule,
   MatRadioModule,
   MatTableModule,
   MatSidenavModule,
   MatToolbarModule,
   MatSlideToggleModule,
   MatAutocompleteModule,
   MatChipsModule,
   MatBadgeModule,
   MatSliderModule
} from '@angular/material';

const MATERIAL_MODULES = [
   MatProgressBarModule, MatCardModule, MatTableModule, MatPaginatorModule, MatAutocompleteModule,
   MatInputModule, MatButtonModule, MatIconModule, MatExpansionModule, MatChipsModule, MatBadgeModule,
   MatListModule, MatSelectModule, MatTooltipModule, MatGridListModule, MatMenuModule, MatSliderModule,
   MatMenuModule, MatDialogModule, MatGridListModule, MatToolbarModule, MatRadioModule,
   MatTabsModule, MatStepperModule, MatSnackBarModule, MatDatepickerModule, MatNativeDateModule,
   MatPaginatorModule, MatCheckboxModule, MatExpansionModule, MatProgressSpinnerModule, MatListModule,
   MatRadioModule, MatSidenavModule, MatProgressBarModule, MatSlideToggleModule];

@NgModule({
   declarations: [
   ],
   imports: [
      CommonModule,
      FlexLayoutModule,
      MATERIAL_MODULES,
      FormsModule,
      ReactiveFormsModule
   ],
   exports: [
      CommonModule,
      FlexLayoutModule,
      MATERIAL_MODULES,
      FormsModule,
      ReactiveFormsModule,
   ],
   providers: [

   ],
   bootstrap: [

   ]
})
export class SharedModule { }
