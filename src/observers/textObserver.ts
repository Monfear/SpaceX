import { Common } from "../utils/common";

type Keyframes = {
    opacity: number;
    transform: string;
}[];

export class TextObserver extends Common {
    private textElements: (HTMLParagraphElement | HTMLDivElement)[] =
        [
            this.getElementByDataset<HTMLParagraphElement>('falcon-description')!,
            this.getElementByDataset<HTMLParagraphElement>('aboutUs-text')!,
            this.getElementByDataset<HTMLDivElement>('mission-quote')!,
            ...document.querySelectorAll<HTMLDivElement>('.Mission .content__item__text')
        ];

    private keyframes: Keyframes = [
        {
            opacity: 0,
            transform: 'translateY(20px)',
        },
        {
            opacity: 1,
            transform: 'translateY(0)',
        },
    ];

    constructor() {
        super();

        this.textElements.forEach((element: HTMLParagraphElement | HTMLDivElement): void => {
            this.hideText(element);
        });

        this.setTextObserver();
    }

    private setTextObserver(): void {
        const textObserver: IntersectionObserver = new IntersectionObserver(
            (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    if (entry.isIntersecting) {
                        this.showText(entry.target);

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

        this.textElements.forEach((element: HTMLParagraphElement): void => {
            textObserver.observe(element);
        });
    }

    private showText(element: IntersectionObserverEntry['target']): void {
        element.animate(this.keyframes, {
            fill: 'forwards',
            duration: 1000,
        });
    }

    private hideText(element: HTMLParagraphElement | HTMLDivElement): void {
        element.animate(this.keyframes, {
            fill: 'forwards',
            duration: 1,
            direction: 'reverse',
        });
    }
}
