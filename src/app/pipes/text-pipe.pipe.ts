import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textPipe'
})
export class TextPipePipe implements PipeTransform {

  transform(value: string | undefined): string {
    if (value!.length > 100) {
      return value!.substring(0, 100) + '...';
    }
    return value!;
  }

}
