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
}
