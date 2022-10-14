export class Footer {
    private arrowUpIcon: HTMLDivElement = document.querySelector('[data-arrowUpIcon]') as HTMLDivElement;
    private formEl: HTMLFormElement = document.querySelector('[data-footerForm]') as HTMLFormElement;
    private inputEl: HTMLInputElement = document.querySelector('[data-footerInput]') as HTMLInputElement;
    private messageEl: HTMLParagraphElement = document.querySelector('[data-formMessage]') as HTMLParagraphElement;

    constructor() {
        this.setupEventsListeners();
    }

    private setupEventsListeners(): void {
        this.arrowUpIcon.addEventListener('click', this.movePageTop.bind(this));
        this.formEl.addEventListener('submit', this.checkEmail.bind(this));
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
