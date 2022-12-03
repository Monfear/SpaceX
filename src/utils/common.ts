export class Common {
    protected mobileBreakpoint: number = 992;
    protected isMobileView: boolean = false;

    protected ACTIVE_CLASS: string = 'active';
    protected INACTIVE_CLASS: string = 'inactive';

    constructor() {
        this.setupCommonEventsListeners();

        this.checkDevice();
    }

    protected setupCommonEventsListeners(): void {
        window.addEventListener('resize', this.checkDevice.bind(this));
    }

    protected checkDevice(): void {
        if (window.innerWidth < this.mobileBreakpoint) {
            this.isMobileView = true;
        } else {
            this.isMobileView = false;
        }
    }

    protected getElementByDataset<T extends HTMLElement>(dataset: string): T | null {
        const datasetSelector: string = `[data-selector='${dataset}']`;
        const numOfElements: number = document.querySelectorAll<T>(datasetSelector).length;

        if (numOfElements < 1) {
            console.warn('dataset selector doesn\'t exist');
            return null;
        }

        if (numOfElements > 1) {
            console.warn('dataset selector duplicated');
            return null;
        }

        const element: T = document.querySelector<T>(datasetSelector) as T;

        return element;
    }
}
