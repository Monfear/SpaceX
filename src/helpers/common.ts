export class Common {
    protected mobileBreakpoint: number = 768;
    protected isMobileView: boolean = false;

    constructor() {
        this.setupCommonEventsListeners();

        this.checkDevice();
    }

    protected setupCommonEventsListeners(): void {
        window.addEventListener('resize', this.checkDevice.bind(this));
    }

    protected checkDevice(): void {
        if (window.innerWidth <= this.mobileBreakpoint) {
            this.isMobileView = true;
        } else {
            this.isMobileView = false;
        }
    }
}
