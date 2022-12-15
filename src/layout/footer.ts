import { Common } from "../utils/common";

export class Footer extends Common {
    private arrowUpIcon: HTMLDivElement = this.getElementByDataset<HTMLDivElement>('footer-arrowUp')!;
    private formEl: HTMLFormElement = this.getElementByDataset<HTMLFormElement>('footer-form')!;
    private inputEl: HTMLInputElement = this.getElementByDataset<HTMLInputElement>('footer-input')!;
    private messageEl: HTMLParagraphElement = this.getElementByDataset<HTMLParagraphElement>('footer-message')!;

    private navLinks: HTMLAnchorElement[] = Array.from(document.querySelectorAll<HTMLAnchorElement>('.Footer .content__navigation__links__link'));
    private sections: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>('#index section'));
    private navbar: HTMLDivElement = this.getElementByDataset('navbar')!;

    constructor() {
        super();

        this.setEventsListeners();
    }

    private setEventsListeners(): void {
        this.arrowUpIcon.addEventListener('click', this.movePageTop.bind(this));
        this.formEl.addEventListener('submit', this.checkEmail.bind(this));

        if (this.isIndexPage) {
            this.navLinks.forEach((link: HTMLAnchorElement, idx: number, arr: HTMLAnchorElement[]): void => {
                link.addEventListener('click', (e: MouseEvent): void => {
                    e.preventDefault();

                    window.scrollTo({
                        top: this.sections[idx].offsetTop - (this.isMobileView ? this.navbar.clientHeight : 0),
                        behavior: "smooth",
                    });
                });
            });
        }
    }

    private movePageTop(): void {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }

    private checkEmail(e: SubmitEvent): void {
        e.preventDefault();

        const regex: RegExp = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-z]+)$/;
        const email: string = this.inputEl.value;

        const successMessage: string = 'You have been successfully added.';
        const errorMessage: string = 'Please enter correct email adress.';

        if (regex.test(email)) {
            this.messageEl.textContent = successMessage;

            this.messageEl.classList.remove('error');
            this.messageEl.classList.add('success');

            this.inputEl.value = '';
        } else {
            this.messageEl.textContent = errorMessage;

            this.messageEl.classList.remove('success');
            this.messageEl.classList.add('error');
        }
    }
}
