import { textAnimations } from "../utils/animations";
import { Common } from "../utils/common";

export class TextObserver extends Common {
    private textElements: (HTMLParagraphElement | HTMLDivElement)[] =
        [
            this.getElementByDataset<HTMLParagraphElement>('falcon-description')!,
            this.getElementByDataset<HTMLParagraphElement>('aboutUs-text')!,
            this.getElementByDataset<HTMLDivElement>('mission-quote')!,
            ...document.querySelectorAll<HTMLDivElement>('.Mission .content__item__text')
        ];

    constructor() {
        super();

        this.textElements.forEach((element: HTMLParagraphElement | HTMLDivElement): void => {
            textAnimations.hideText(element);
        });

        this.setTextObserver();
    }

    private setTextObserver(): void {
        const textObserver: IntersectionObserver = new IntersectionObserver(
            (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    if (entry.isIntersecting) {
                        textAnimations.showText(entry.target);

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
}
