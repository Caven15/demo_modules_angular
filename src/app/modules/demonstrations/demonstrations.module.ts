import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemonstrationsRoutingModule } from './demonstrations-routing.module';
import { Demo1Component } from './components/demo1/demo1.component';
import { Demo2Component } from './components/demo2/demo2.component';
import { Demo3Component } from './components/demo3/demo3.component';


@NgModule({
  declarations: [
    Demo1Component,
    Demo2Component,
    Demo3Component
  ],
  imports: [
    CommonModule,
    DemonstrationsRoutingModule
  ],
  exports :[
    // exporté vers un autre module
  ]
})
export class DemonstrationsModule { }
