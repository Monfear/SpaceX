type Keyframes = {
    opacity: number;
    transform: string;
}[];

export class TextObserver {
    private textElements: HTMLParagraphElement[] = [document.querySelector('[data-falcon9-description]') as HTMLParagraphElement, document.querySelector('[data-aboutUs-text]') as HTMLParagraphElement];

    private keyframes: Keyframes = [
        {
            opacity: 0,
            transform: 'translateY(-20px)',
        },
        {
            opacity: 1,
            transform: 'translateY(0)',
        },
    ];

    constructor() {
        this.textElements.forEach((element: HTMLParagraphElement) => {
            this.hideText(element);
        });

        this.setTextObserver();
    }

    public setTextObserver(): void {
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

        this.textElements.forEach((element) => {
            textObserver.observe(element);
        });
    }

    private showText(element: IntersectionObserverEntry['target']): void {
        element.animate(this.keyframes, {
            fill: 'forwards',
            duration: 1500,
        });
    }

    private hideText(element: IntersectionObserverEntry['target']): void {
        element.animate(this.keyframes, {
            fill: 'forwards',
            duration: 1,
            direction: 'reverse',
        });
    }
}
