import { Common } from "../utils/common";

export class Header extends Common {
    private headerElement: HTMLElement = this.getElementByDataset<HTMLElement>('header')!;
    private iconArrowDown: HTMLDivElement = this.getElementByDataset<HTMLDivElement>('header-iconArrowDown')!;
    private cta: HTMLButtonElement = this.getElementByDataset<HTMLButtonElement>('header-cta')!;
    private navbar: HTMLElement = this.getElementByDataset<HTMLElement>('navbar')!;

    constructor() {
        super();

        this.setEventsListeners();
    }

    private setEventsListeners(): void {
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
                top: this.headerElement.clientHeight - (this.isMobileView ? this.navbar.offsetHeight : 0),
                behavior: "smooth"
            }
        );
    }

    private navigateToSection(): void {
        window.location.href = "./pages/watch.html";
        // window.open("./pages/watch.html", '_blank');
    }
}