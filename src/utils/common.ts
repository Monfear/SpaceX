export class Common {
    protected mobileBreakpoint: number = 1024;
    protected isMobileView: boolean = false;

    protected isIndexPage: undefined | boolean = undefined;

    protected ACTIVE_CLASS: string = 'active';
    protected INACTIVE_CLASS: string = 'inactive';
    protected HIDE_CLASS: string = 'hide';

    constructor() {
        this.setCommonEventsListeners();

        this.checkDevice();
        this.checkIsIndexPage();
    }

    protected setCommonEventsListeners(): void {
        window.addEventListener('resize', this.checkDevice.bind(this));
    }

    protected checkDevice(): void {
        if (window.innerWidth < this.mobileBreakpoint) {
            this.isMobileView = true;
        } else {
            this.isMobileView = false;
        }
    }

    protected checkIsIndexPage(): void {
        if (document.body.id === 'index') {
            this.isIndexPage = true;
        } else {
            this.isIndexPage = false;
        }
    }

    protected getElementByDataset<T extends HTMLElement>(dataset: string): T | null {
        const datasetSelector: string = `[data-selector='${dataset}']`;
        const numOfElements: number = document.querySelectorAll<T>(datasetSelector).length;

        if (numOfElements < 1) {
            console.error('dataset selector doesn\'t exist');
            return null;
        }

        if (numOfElements > 1) {
            console.error('dataset selector duplicated');
            return null;
        }

        const element: T = document.querySelector<T>(datasetSelector) as T;

        return element;
    }
}
