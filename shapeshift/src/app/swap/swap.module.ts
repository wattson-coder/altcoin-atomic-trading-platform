import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SwapComponent} from './swap.component';
import {ShapeShiftCommonModule} from '../common/common.module';
import { SwapIconComponent } from './swap-icon/swap-icon.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', redirectTo: 'swap', pathMatch: 'full'},
      {path: 'swap', component: SwapComponent},
    ]),
    ShapeShiftCommonModule,
  ],
  declarations: [
    SwapComponent,
    SwapIconComponent,
  ],
})
export class SwapModule {
}