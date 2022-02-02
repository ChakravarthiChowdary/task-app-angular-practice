import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appBgColorChange]',
})
export class BgColorChangeDirective {
  constructor(private eleRef: ElementRef) {}

  @Input() taskCompleted: boolean | undefined = false;

  @HostBinding('style.backgroundColor') bgColor = '';
  @HostBinding('style.borderColor') borderColor = '';
  @HostBinding('style.transition') transition = '';

  bgColorCode = '#F8F8F8';
  taskCompletedColorCode = 'limegreen';
  taskPendingColorCode = '#f0ad4e';

  @HostListener('mouseenter') mouseEnter() {
    this.bgColor = this.bgColorCode;
    this.borderColor = this.bgColorCode;
    this.transition = '0.5s ease';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.bgColor = 'transparent';
    this.borderColor = this.taskCompleted
      ? this.taskCompletedColorCode
      : this.taskPendingColorCode;
  }
}
