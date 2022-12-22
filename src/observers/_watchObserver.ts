import { Common } from "../utils/common";
import { textAnimations, videoAnimations } from "../utils/animations";

export class WatchObserver extends Common {
    private textElements: HTMLElement[] = [
        this.getElementByDataset<HTMLElement>('watch-header-description')!,
        this.getElementByDataset<HTMLElement>('watch-countdown-caption')!
    ];

    private videoEl: HTMLPictureElement = this.getElementByDataset<HTMLPictureElement>('watch-countdown-video')!;

    constructor() {
        super();

        this.textElements.forEach((element: HTMLElement) => {
            textAnimations.hideText(element);
        });

        videoAnimations.hideVideo(this.videoEl);

        this.setObserver();
    }

    private setObserver(): void {
        const observer: IntersectionObserver = new IntersectionObserver(
            (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    if (entry.isIntersecting) {
                        if (entry.target instanceof HTMLElement) {
                            if (this.textElements.includes(entry.target)) {
                                textAnimations.showText(entry.target);
                            }

                            if (entry.target === this.videoEl) {
                                videoAnimations.showVideo(entry.target);
                            }
                        }

                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                threshold: 0,
                rootMargin: '-150px 0px',
            }
        );

        this.textElements.forEach((element: HTMLElement) => {
            observer.observe(element);
        });

        observer.observe(this.videoEl);
    }
}