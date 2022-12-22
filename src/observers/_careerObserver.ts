import { Common } from "../utils/common";
import { textAnimations } from "../utils/animations";

export class CareerObserver extends Common {
    private captionEl: HTMLParagraphElement = this.getElementByDataset<HTMLParagraphElement>('career-caption')!;

    constructor() {
        super();

        textAnimations.hideText(this.captionEl);

        this.setObserver();
    }

    private setObserver(): void {
        const observer: IntersectionObserver = new IntersectionObserver(
            (entries: IntersectionObserverEntry[], observer: IntersectionObserver): void => {
                entries.forEach((entry: IntersectionObserverEntry) => {
                    if (entry.isIntersecting) {
                        if (entry.target instanceof HTMLElement) {
                            textAnimations.showText(entry.target);
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

        observer.observe(this.captionEl);
    }
}