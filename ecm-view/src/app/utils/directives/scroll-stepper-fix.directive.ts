import { Directive, HostListener } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';

@Directive({
  selector: '[scrollStepperFix]'
})
export class ScrollStepperFixDirective {

  constructor(
    protected readonly stepper: MatStepper
  ) {}
   
  @HostListener('animationDone')
  selectionChanged() {
    const stepId = this.stepper._getStepLabelId(this.stepper.selectedIndex);
    const stepElement = document.getElementById(stepId);
    if(stepElement) {
      stepElement.scrollIntoView({
        block: 'center', 
        inline: 'end', 
        behavior: 'smooth'
      })
    }
  }
}