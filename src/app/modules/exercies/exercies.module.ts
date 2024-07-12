import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExerciesRoutingModule } from './exercies-routing.module';
import { FormsModule } from '@angular/forms';
import { Exo1Component } from './components/exo1/exo1.component';
import { Exo2Component } from './components/exo2/exo2.component';
import { Exo3Component } from './components/exo3/exo3.component';


@NgModule({
  declarations: [
    Exo1Component,
    Exo2Component,
    Exo3Component
  ],
  imports: [
    CommonModule,
    ExerciesRoutingModule,
    FormsModule
  ]
})
export class ExerciesModule { }
