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

    constructor(private textElement: HTMLParagraphElement) {
        this.hideText(this.textElement);
    }

    public setTextObserver(): void {
        const textObserver = new IntersectionObserver(
            (entries, observer) => {
                entries.forEach((entry) => {
                    console.log(entry);
                    if (entry.isIntersecting) {
                        console.log('intersecting');

                        this.showText(this.textElement);

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

        textObserver.observe(this.textElement);
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
