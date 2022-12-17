import { Common } from "../utils/common";

type TextKeyframes = {
    opacity: number,
    transform: string;
}[];

type VideoKeyframes = {
    scale: number,
    filter: string;
}[];

export class WatchObserver extends Common {
    private textElements: HTMLElement[] = [
        this.getElementByDataset<HTMLElement>('watch-header-description')!,
        this.getElementByDataset<HTMLElement>('watch-countdown-caption')!
    ];

    private videoEl: HTMLPictureElement = this.getElementByDataset<HTMLPictureElement>('watch-countdown-video')!;

    private textKeyframes: TextKeyframes = [
        {
            opacity: 0,
            transform: 'translateY(20px)',
        },
        {
            opacity: 1,
            transform: 'translateY(0)',
        },
    ];

    private videoKeyframes: VideoKeyframes = [
        {
            scale: 0,
            filter: 'hue-rotate(180deg)'
        },
        {
            scale: 1,
            filter: 'hue-rotate(0deg)'
        }
    ];

    constructor() {
        super();

        this.textElements.forEach((element: HTMLElement) => {
            this.hideText(element);
        });

        this.hideVideo(this.videoEl);

        this.setObserver();
    }

    private setObserver(): void {
        const observer: IntersectionObserver = new IntersectionObserver(
            (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    if (entry.isIntersecting) {
                        if (entry.target instanceof HTMLElement) {
                            if (this.textElements.includes(entry.target)) {
                                this.showText(entry.target);
                            }

                            if (entry.target === this.videoEl) {
                                this.showVideo(entry.target);
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

    private showText(element: IntersectionObserverEntry['target']): void {
        element.animate(this.textKeyframes, {
            fill: 'forwards',
            duration: 1000,
        });
    }

    private hideText(element: HTMLElement): void {
        element.animate(this.textKeyframes, {
            fill: 'forwards',
            duration: 1,
            direction: 'reverse',
        });
    }

    private showVideo(element: HTMLPictureElement): void {
        element.animate(this.videoKeyframes, {
            duration: 1500,
            fill: 'forwards',
        });
    }

    private hideVideo(element: HTMLPictureElement): void {
        element.animate(this.videoKeyframes, {
            duration: 1,
            direction: 'reverse',
            fill: 'forwards'
        });
    }
}