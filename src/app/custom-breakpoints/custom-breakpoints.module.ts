import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BREAKPOINTS, BreakPoint } from '@angular/flex-layout';

const CUSTOM_BREAKPOINTS = [
  {
    alias: 'xs',
    mediaQuery: 'screen and (max-width: 699.99px)',
    priority: 1000,
},
{
    alias: 'sm',
    mediaQuery: 'screen and (min-width: 700) and (max-width: 1023.99px)',
    priority: 900,
},
{
    alias: 'md',
    mediaQuery: 'screen and (min-width: 1024px) and (max-width: 1439.99px)',
    priority: 800,
},
{
    alias: 'lg',
    mediaQuery: 'screen and (min-width: 1440px) and (max-width: 1919.99px)',
    priority: 700,
},
{
    alias: 'xl',
    mediaQuery: 'screen and (min-width: 1920px) and (max-width: 4999.99px)',
    priority: 600,
}
];

export function customBreakPointProvider():BreakPoint[]{
  return CUSTOM_BREAKPOINTS
}
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: BREAKPOINTS, useFactory: customBreakPointProvider}
  ]
})
export class CustomBreakpointsModule { }
