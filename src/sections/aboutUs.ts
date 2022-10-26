import { PictureObserver } from '../observers/imageObserver';
import { TextObserver } from '../observers/textObserver';

export class AboutUs {
    private textEl: HTMLParagraphElement = document.querySelector('[data-aboutUs-text]') as HTMLParagraphElement;
    private pictureEl: HTMLDivElement = document.querySelector('[data-aboutUs-picture]') as HTMLDivElement;

    private textObserver = new TextObserver(this.textEl);
    private pictureObserver = new PictureObserver(this.pictureEl);

    constructor() {
        this.textObserver.setTextObserver();

        this.pictureObserver.setPictureObserver();
    }
}
