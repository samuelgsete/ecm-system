import { 
    Directive, 
    EventEmitter, 
    HostBinding, 
    HostListener, 
    Output
  } from '@angular/core';
  
  @Directive({
    selector: '[dragDropUpload]'
  })
  export class DragDropUploadDirective {
  
    @Output() fileDropped = new EventEmitter<any>();
    @HostBinding("style.borderColor") private borderColor = "";
    @HostBinding("style.background") private background = '';
    @HostBinding("style.borderRadius") private borderRadius = '';
  
    public constructor() { }
  
    @HostListener("dragover", ["$event"]) 
    public onDragOver(evt: DragEvent) {
        evt.preventDefault();
        evt.stopPropagation();
        this.borderColor = "rgb(var(--amber))";
        this.background = "rgba(var(--amber), 0.1)";
        this.borderRadius = "5px";
    }
  
    @HostListener("dragleave", ["$event"]) 
    public onDragLeave(evt: DragEvent) {
      evt.preventDefault();
      evt.stopPropagation();
      this.borderColor = "rgba(var(--purple), 0.06)";
      this.background = "rgba(var(--purple), 0.06)";
      this.borderRadius = "0";
    }
  
    @HostListener("drop", ["$event"]) 
    public onDrop(evt: DragEvent) {
      evt.preventDefault();
      evt.stopPropagation();
      this.borderColor = "rgba(var(--purple), 0.06)";
      this.background = "rgba(var(--purple), 0.06)";
      this.borderRadius = "0";
        
      const files = evt.dataTransfer?.files;
      this.fileDropped.emit(files);
    }
  }