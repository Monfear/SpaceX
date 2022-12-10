import { Common } from "../utils/common";

export class Backdrop extends Common {
    public backdropEl: HTMLDivElement = this.getElementByDataset('backdrop')!;

    constructor() {
        super();
    }

    public openBackdrop(): void {
        this.backdropEl.classList.remove(this.HIDE_CLASS);

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
        this.backdropEl.classList.add(this.HIDE_CLASS);
    }
}
