import { Navbar } from './navbar';

export class Backdrop {
    public backdropEl: HTMLDivElement = document.querySelector('[data-backdrop]') as HTMLDivElement;

    constructor() {
        // pass
    }

    public openBackdrop(): void {
        this.backdropEl.classList.remove('hide');

        let opacity: number = 0;

        this.backdropEl.style.opacity = String(opacity);

        let intervalId = setInterval(() => {
            opacity += 0.2;

            this.backdropEl.style.opacity = String(opacity);

            if (opacity >= 1) {
                clearInterval(intervalId);
            }
        }, 100);
    }

    public closeBackdrop(): void {
        this.backdropEl.classList.add('hide');
    }
}
