import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'imageManager'
})
export class ImageManagerPipe implements PipeTransform {
    
    transform(images: any[]): string {
        if (!images || images.length === 0) {
            return 'assets/img/no-image.png';
        } else {
            return images[0].url;
        }
    }
    
}
