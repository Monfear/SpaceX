type TextKeyframes = {
    opacity: number,
    transform: string;
}[];

export class CareerObserver {
    constructor() {
        // pass
        console.log('career observer');
    }

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

    private setObserver(): void {
        const observer: IntersectionObserver = new IntersectionObserver(
            (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    if (entry.isIntersecting) {
                        if (entry.target instanceof HTMLElement) {
                            // pass
                        }

                        // observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                threshold: 0,
                rootMargin: '-150px 0px',
            }
        );
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
}