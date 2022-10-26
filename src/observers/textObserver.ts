type Keyframes = {
    opacity: number;
    transform: string;
}[];

export class TextObserver {
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

    constructor(private element: HTMLParagraphElement) {
        this.hideText(this.element);
    }

    public setTextObserver(): void {
        const textObserver: IntersectionObserver = new IntersectionObserver(
            (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    if (entry.isIntersecting) {
                        this.showText(this.element);

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

        textObserver.observe(this.element);
    }

    private showText(element: HTMLParagraphElement): void {
        element.animate(this.keyframes, {
            fill: 'forwards',
            duration: 1500,
        });
    }

    private hideText(element: HTMLParagraphElement): void {
        element.animate(this.keyframes, {
            fill: 'forwards',
            duration: 1,
            direction: 'reverse',
        });
    }
}
