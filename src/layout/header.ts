import { Common } from "../utils/common";

export class Header extends Common {
    private headerElement: HTMLElement = document.querySelector('[data-header]') as HTMLElement;
    private iconArrowDown: HTMLDivElement = document.querySelector('[data-header-iconArrowDown]') as HTMLDivElement;
    private cta: HTMLButtonElement = this.getElementByDataset('header-cta')!;

    constructor() {
        super();

        this.setupListeners();
    }

    private setupListeners(): void {
        this.iconArrowDown.addEventListener('click', () => {
            this.scroll();
        });

        this.cta.addEventListener('click', () => {
            this.navigateToSection();
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

    private navigateToSection(): void {
        // window.location.href = "./pages/watch.html";
        window.open("./pages/watch.html", '_blank');
    }
}