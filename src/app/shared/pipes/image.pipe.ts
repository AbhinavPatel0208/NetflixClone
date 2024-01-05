import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appImage',
  standalone: true,
})
export class ImagePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return `https://image.tmdb.org/t/p/w500/${value}`;
  }

}
