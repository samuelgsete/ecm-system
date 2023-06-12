import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filesize'
})
export class FileSizePipe implements PipeTransform {

    public transform(size: number,...args: any[]) {
        let extension = args[0];
        switch(extension) {
            case 'Kb':
                return (size / (1024)).toFixed(2).concat(` ${extension}`);

            case 'Mb':
                return (size / (1024 * 1024)).toFixed(2).concat(` ${extension}`);

            default: return (size / (1024)).toFixed(2).concat(` ${extension}`);
        }
    }
}