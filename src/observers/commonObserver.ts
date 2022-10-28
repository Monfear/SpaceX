type Options = {
    root: Element | Document | null | undefined;
    threshold: number;
    margin: string;
};

export class StatsObserver {
    private statsObserver: IntersectionObserver | undefined = undefined;

    private options: Options = {
        root: null,
        threshold: 1,
        margin: '0px',
    };

    private launchesCounterElement: HTMLHeadingElement = document.querySelector('[data-launches-counter]') as HTMLHeadingElement;
    private landingsCounterElement: HTMLHeadingElement = document.querySelector('[data-landings-counter]') as HTMLHeadingElement;
    private reflightsCounterElement: HTMLHeadingElement = document.querySelector('[data-reflights-counter]') as HTMLHeadingElement;

    private countersElements: HTMLHeadingElement[] = [this.launchesCounterElement, this.landingsCounterElement, this.reflightsCounterElement];

    private statsElement: HTMLDivElement = document.querySelector('[data-stats]') as HTMLDivElement;

    constructor() {
        this.setupStatsObserver();
    }

    private setupStatsObserver(): void {
        this.statsObserver = new IntersectionObserver((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                if (entry.isIntersecting) {
                    this.countersElements.forEach((element: HTMLHeadingElement): void => {
                        this.count(element);

                        observer.unobserve(entry.target);
                    });
                }
            });
        }, this.options);

        this.statsObserver.observe(this.statsElement);
    }

    private count(element: HTMLElement): void {
        let maxCount: number = 0;

        switch (element) {
            case this.launchesCounterElement:
                maxCount = 181;
                break;
            case this.landingsCounterElement:
                maxCount = 141;
                break;
            case this.reflightsCounterElement:
                maxCount = 119;
                break;
            default:
                maxCount = 0;
                console.warn('element not specified');
                break;
        }

        let intervalId: number | undefined = undefined;
        const intervalTime: number = 0.1;
        const intervalSlowerTime: number = 500;

        const difference: number = 4;

        let counter: number = 50;

        intervalId = setInterval(() => {
            if (counter < maxCount - difference) {
                counter++;
                element.innerText = String(counter);
            } else {
                clearInterval(intervalId);

                intervalId = setInterval(() => {
                    if (counter < maxCount) {
                        counter++;
                        element.innerText = String(counter);
                    } else {
                        clearInterval(intervalId);
                    }
                }, intervalSlowerTime);
            }
        }, intervalTime);
    }
}
