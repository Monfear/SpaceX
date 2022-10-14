export class Footer {
    private arrowUpIcon: HTMLDivElement = document.querySelector('[data-arrowUpIcon]') as HTMLDivElement;

    constructor() {
        this.setupEventsListeners();
    }

    private setupEventsListeners(): void {
        this.arrowUpIcon.addEventListener('click', this.movePageTop.bind(this));
    }

    private movePageTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
}
