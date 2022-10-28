export class PictureObserver {
    private pictureElements: HTMLDivElement[] = [document.querySelector('[data-aboutUs-picture]') as HTMLDivElement];

    constructor() {
        this.pictureElements.forEach((element: HTMLDivElement) => {
            this.setStartingStyles(element);
        });

        this.setPictureObserver();
    }

    public setPictureObserver(): void {
        const pictureObserver: IntersectionObserver = new IntersectionObserver(
            (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    if (entry.isIntersecting) {
                        this.showPicture(entry.target);

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

        this.pictureElements.forEach((element: HTMLDivElement) => {
            pictureObserver.observe(element);
        });
    }

    private setStartingStyles(element: HTMLDivElement): void {
        element.style.scale = '0';
    }

    private showPicture(element: IntersectionObserverEntry['target']): void {
        if (element instanceof HTMLDivElement) {
            element.style.scale = '1';
        }

        element.animate(
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
