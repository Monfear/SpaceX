export class Header {
    private headerElement: HTMLElement = document.querySelector('[data-header]') as HTMLElement;
    private iconArrowDown: HTMLDivElement = document.querySelector('[data-header-iconArrowDown]') as HTMLDivElement;

    constructor() {
        this.setupListeners();
    }

    private setupListeners(): void {
        this.iconArrowDown.addEventListener('click', () => {
            this.scroll();
        });
    }

    private scroll(): void {
        window.scrollTo(
            {
                top: this.headerElement.clientHeight,
                behavior: "smooth"
            }
        );
    }
}