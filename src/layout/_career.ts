import { Common } from "../utils/common";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

import { careerCategories } from "../data/data";

class Career extends Common {
    private selectEl: HTMLSelectElement = this.getElementByDataset<HTMLSelectElement>('career-select')!;
    private form: HTMLFormElement = this.getElementByDataset<HTMLFormElement>('career-form')!;
    private fileInput: HTMLInputElement = this.getElementByDataset<HTMLInputElement>('career-fileInput')!;
    private message: HTMLParagraphElement = this.getElementByDataset<HTMLParagraphElement>('career-message')!;

    constructor() {
        super();

        new Navbar();
        new Footer();

        this.setListeners();

        this.renderOptions();
    }

    private setListeners(): void {
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();

            let files: FileList | null = this.fileInput.files;

            if (!this.checkIsSelectedCategory()) {
                if (this.message.classList.contains(this.SUCCESS_CLASS)) {
                    this.message.classList.remove(this.SUCCESS_CLASS);
                }

                this.message.classList.add(this.ERROR_CLASS);
                this.message.innerText = 'Please select category.';

                return;
            }

            if (files?.length) {
                const [file] = files;

                if (file) {
                    if (this.checkIsFileProperType(file)) {
                        if (this.message.classList.contains(this.ERROR_CLASS)) {
                            this.message.classList.remove(this.ERROR_CLASS);
                        }

                        this.message.classList.add(this.SUCCESS_CLASS);
                        this.message.innerText = 'Your application has been sent.';

                        this.fileInput.value = '';
                    } else {
                        this.message.classList.add(this.ERROR_CLASS);
                        this.message.innerText = 'Please upload your cv in an appropriate extension.';
                    }
                } else {
                    this.message.classList.add(this.ERROR_CLASS);
                    this.message.innerText = 'Please upload your cv.';
                }
            } else {
                if (this.message.classList.contains(this.SUCCESS_CLASS)) {
                    this.message.classList.remove(this.SUCCESS_CLASS);
                }

                this.message.classList.add(this.ERROR_CLASS);
                this.message.innerText = 'Please upload your cv.';
            }
        });
    }

    private renderOptions(): void {
        careerCategories.forEach((category: string) => {
            const optionEl: HTMLOptionElement = document.createElement('option');
            optionEl.classList.add('header__form__select__option');
            optionEl.value = category;
            optionEl.innerText = category;
            this.selectEl.append(optionEl);
        });
    }

    private checkIsFileProperType(file: File): boolean {
        let result: boolean;

        if (file.type === 'application/pdf') {
            result = true;
        } else {
            result = false;
        }

        return result;
    }

    private checkIsSelectedCategory(): boolean {
        let result: boolean;

        if (this.selectEl.value !== 'null') {
            result = true;
        } else {
            result = false;
        }

        return result;
    }
}

window.onload = function (): void {
    new Career();
};
