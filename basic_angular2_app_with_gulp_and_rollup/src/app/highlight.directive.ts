import {Directive, ElementRef,HostListener, Input} from '@angular/core';

@Directive({   selector: '[myHighlight]' })
export class HighlightDirective {   
     
                  
  @Input('myHighlight') 
  public  highlightColor: string; 
 
  private _defaultColor = 'red';

  @Input() set defaultColor(colorName:string){
   this._defaultColor = colorName || this._defaultColor;
  }
  constructor(private el: ElementRef) { 
      //el.nativeElement.style.backgroundColor = 'yellow';  
  }  
     
    @HostListener('mouseenter')
    onMouseEnter() { this._highlight(this.highlightColor || this._defaultColor); }  
      
    @HostListener('mouseleave')  
    onMouseLeave() { this._highlight(null); }  
      
    private _highlight(color: string) 
          {     this.el.nativeElement.style.backgroundColor =  color;  }
}