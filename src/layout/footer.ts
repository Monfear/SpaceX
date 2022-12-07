import { Common } from "../utils/common";

export class Footer extends Common {
    private arrowUpIcon: HTMLDivElement = document.querySelector<HTMLDivElement>('[data-arrowUpIcon]') as HTMLDivElement;
    private formEl: HTMLFormElement = document.querySelector<HTMLFormElement>('[data-footerForm]') as HTMLFormElement;
    private inputEl: HTMLInputElement = document.querySelector<HTMLInputElement>('[data-footerInput]') as HTMLInputElement;
    private messageEl: HTMLParagraphElement = document.querySelector<HTMLParagraphElement>('[data-formMessage]') as HTMLParagraphElement;

    private navLinks: HTMLAnchorElement[] = Array.from(document.querySelectorAll<HTMLAnchorElement>('.Footer .content__navigation__links__link'));
    private sections: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>('section'));
    private navbar: HTMLDivElement = this.getElementByDataset('navbar')!;

    constructor() {
        super();

        this.setEventsListeners();
    }

    private setEventsListeners(): void {
        this.arrowUpIcon.addEventListener('click', this.movePageTop.bind(this));
        this.formEl.addEventListener('submit', this.checkEmail.bind(this));

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
