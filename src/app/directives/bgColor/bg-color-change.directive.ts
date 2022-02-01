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

  bgColorCode = '#D3D3D3';
  taskCompletedColorCode = 'limegreen';
  taskPendingColorCode = '#f0ad4e';

  @HostListener('mouseenter') mouseEnter() {
    this.bgColor = this.bgColorCode;
    this.borderColor = this.bgColorCode;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.bgColor = 'transparent';
    this.borderColor = this.taskCompleted
      ? this.taskCompletedColorCode
      : this.taskPendingColorCode;
  }
}
