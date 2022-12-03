import { Common } from "../utils/common";

type Keyframes = {
    transform: string;
}[];

export class PictureObserver extends Common {
    private pictureElements_1: HTMLPictureElement[] = [
        this.getElementByDataset<HTMLPictureElement>('aboutUs-picture')!
    ];

    private pictureElements_2: HTMLPictureElement[] = [
        ...document.querySelectorAll<HTMLPictureElement>('.Mission .content__item__picture')
    ];

    private keyframes_1: Keyframes = [
        {
            transform: 'scale(0) rotateZ(0)',
        },
        {
            transform: 'scale(1) rotateZ(360deg)',
        },
    ];

    private keyframes_2_v1: Keyframes = [
        {
            transform: 'translateX(90%)'
        },
        {
            transform: 'translateX(0)'
        },
    ];

    private keyframes_2_v2: Keyframes = [
        {
            transform: 'translateX(-90%)'
        },
        {
            transform: 'translateX(0)'
        },
    ];

    constructor() {
        super();

        this.setPictureObserver();

        this.pictureElements_1.forEach((element: HTMLPictureElement) => {
            this.hidePicture_1(element);
        });

        this.pictureElements_2.forEach((element: HTMLPictureElement, idx: number) => {
            this.hidePicture_2(element, idx);
        });

    }

    public setPictureObserver(): void {
        const pictureObserver: IntersectionObserver = new IntersectionObserver(
            (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    if (entry.isIntersecting) {
                        if (entry.target instanceof HTMLPictureElement) {
                            if (this.pictureElements_1.includes(entry.target)) {
                                this.showPicture_1(entry.target);
                                observer.unobserve(entry.target);
                            };

                            if (this.pictureElements_2.includes(entry.target)) {
                                const idx: number = this.pictureElements_2.findIndex(
                                    (item: HTMLPictureElement): boolean => {
                                        return item === entry.target;
                                    });

                                this.showPicture_2(entry.target, idx);
                                observer.unobserve(entry.target);
                            }
                        };
                    };
                });
            },
            {
                root: null,
                threshold: 0,
                rootMargin: '-20% 0px',
            }
        );

        this.pictureElements_1.forEach((element: HTMLPictureElement) => {
            pictureObserver.observe(element);
        });

        this.pictureElements_2.forEach((element: HTMLPictureElement) => {
            pictureObserver.observe(element);
        });
    }

    private showPicture_1(element: IntersectionObserverEntry['target']): void {
        element.animate(
            this.keyframes_1,
            {
                duration: 1000,
                fill: 'forwards'
            }
        );
    };

    private hidePicture_1(element: HTMLPictureElement): void {
        element.animate(this.keyframes_1, {
            duration: 1,
            fill: 'forwards',
            direction: 'reverse'
        });
    };

    private showPicture_2(element: HTMLPictureElement, idx: number): void {
        if (idx % 2 === 0) {
            element.animate(this.keyframes_2_v1,
                {
                    duration: 700,
                    fill: 'forwards',
                });
        } else {
            element.animate(this.keyframes_2_v2,
                {
                    duration: 700,
                    fill: 'forwards',
                });
        };
    };

    private hidePicture_2(element: HTMLPictureElement, idx: number): void {
        if (idx % 2 === 0) {
            element.animate(this.keyframes_2_v1,
                {
                    duration: 1,
                    fill: 'forwards',
                    direction: 'reverse'
                });
        } else {
            element.animate(this.keyframes_2_v2,
                {
                    duration: 1,
                    fill: 'forwards',
                    direction: 'reverse'
                });
        };
    };
};
