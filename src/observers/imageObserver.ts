export class PictureObserver {
    constructor(private element: HTMLDivElement) {
        this.setStartingStyles();
    }

    public setPictureObserver(): void {
        const pictureObserver: IntersectionObserver = new IntersectionObserver(
            (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    if (entry.isIntersecting) {
                        this.showPicture();

                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                root: null,
                threshold: 0.7,
                rootMargin: '0px',
            }
        );

        pictureObserver.observe(this.element);
    }

    private setStartingStyles(): void {
        this.element.style.scale = '0';
    }

    private showPicture(): void {
        this.element.style.scale = '1';

        this.element.animate(
            [
                {
                    transform: 'scale(0) rotateZ(0)',
                },
                {
                    transform: 'scale(1) rotateZ(360deg)',
                },
            ],
            {
                duration: 1000,
            }
        );
    }
}
