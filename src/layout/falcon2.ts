import { Common } from "../utils/common";
import { falconStagesData, falconPayloadData } from "../data/data";

export class Falcon2 extends Common {
    private btnPrev: HTMLSpanElement = document.querySelector('[data-falcon-2-slider-btnPrev]') as HTMLSpanElement;
    private btnNext: HTMLSpanElement = document.querySelector('[data-falcon-2-slider-btnNext]') as HTMLSpanElement;
    private dotsContainer: HTMLDivElement = document.querySelector<HTMLDivElement>('[data-slider-dots]') as HTMLDivElement;
    private dots: null | HTMLDivElement[] = null;

    private slidesContainer: HTMLDivElement = document.querySelector('[data-falvon-2-slider-slides]') as HTMLDivElement;

    private navLinksStages: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>('[data-slider-link-stages]'));
    private textContainerStages: HTMLDivElement = document.querySelector('[data-slider-textContainer-stages]') as HTMLDivElement;
    private pictureStages: HTMLDivElement = document.querySelector('[data-slider-firstStage-img-stages]') as HTMLDivElement;

    private navLinksPayload: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>('[data-slider-link-payload]'));
    private textContainerPayload: HTMLDivElement = document.querySelector('[data-slider-textContainer-payload]') as HTMLDivElement;
    private infoContainerPayload: HTMLDivElement = document.querySelector('[data-slider-info-payload]') as HTMLDivElement;
    private picturePayload: HTMLDivElement = document.querySelector('[data-slider-img-payload]') as HTMLDivElement;

    private translateXValue: number = 0;
    private translateXStep: number = 100;
    private translateXUnit: string = 'vw';

    constructor() {
        super();

        this.navLinksStages[0].classList.add(this.ACTIVE_CLASS);
        this.navLinksPayload[0].classList.add(this.ACTIVE_CLASS);

        this.renderDots();

        this.adjustContent();
        this.listenMovementHandler();

        if (this.slidesContainer.style.transform === '') {
            this.btnPrev.classList.add(this.INACTIVE_CLASS);
        }

        window.addEventListener('resize', this.checkBackground.bind(this));
    }

    private moveSlider(): void {
        this.slidesContainer.style.transform = `translateX(-${this.translateXValue}${this.translateXUnit})`;
    }

    private renderDots(): void {
        const numOfSlides: number = this.slidesContainer.children.length;
        const dotClass: string = 'slider__dots__dot';

        for (let i = 0; i < numOfSlides; i++) {
            const dot: HTMLDivElement = document.createElement('div');
            dot.classList.add(dotClass);

            this.dotsContainer.appendChild(dot);
        }

        this.dots = Array.from(this.dotsContainer.querySelectorAll(`div.${dotClass}`));
        this.dots[0].classList.add(this.ACTIVE_CLASS);
    }

    private updateDots(): void {
        this.dots?.forEach((dot: HTMLDivElement, idx: number, arr: HTMLDivElement[]) => {
            if (dot.classList.contains(this.ACTIVE_CLASS)) {
                dot.classList.remove(this.ACTIVE_CLASS);
            }

            arr[this.translateXValue / this.translateXStep].classList.add(this.ACTIVE_CLASS);
        });
    }

    private adjustContent(): void {
        this.navLinksStages.forEach((navLink: HTMLElement, idx: number, arr: HTMLElement[]): void => {
            navLink.addEventListener('click', () => {
                arr.forEach((item: HTMLElement) => {
                    if (item.classList.contains(this.ACTIVE_CLASS)) {
                        item.classList.remove(this.ACTIVE_CLASS);
                    }
                });

                navLink.classList.add(this.ACTIVE_CLASS);
                this.checkBackground();

                this.textContainerStages.innerHTML = falconStagesData[idx].templateText;
                this.pictureStages.style.backgroundImage = `url(${falconStagesData[idx].imgUrl})`;
            });
        });

        this.navLinksPayload.forEach((navLink: HTMLElement, idx: number, arr: HTMLElement[]): void => {
            navLink.addEventListener('click', () => {
                arr.forEach((item: HTMLElement) => {
                    if (item.classList.contains(this.ACTIVE_CLASS)) {
                        item.classList.remove(this.ACTIVE_CLASS);
                    }
                });

                navLink.classList.add(this.ACTIVE_CLASS);
                this.checkBackground();

                this.textContainerPayload.innerHTML = falconPayloadData[idx].templateText;
                this.infoContainerPayload.innerHTML = falconPayloadData[idx].templateInfo;
                this.picturePayload.style.backgroundImage = `url(${falconPayloadData[idx].imgUrl})`;
            });
        });
    }

    private checkBackground(): void {
        const activeLinkStages: number = this.navLinksStages.findIndex((link: HTMLElement): boolean => link.classList.contains(this.ACTIVE_CLASS));
        const activeLinkPayload: number = this.navLinksPayload.findIndex((link: HTMLElement): boolean => link.classList.contains(this.ACTIVE_CLASS));

        if (!this.isMobileView) {
            if (this.slidesContainer.children[1] instanceof HTMLDivElement) {
                this.slidesContainer.children[1].style.backgroundImage = `url(${falconStagesData[activeLinkStages].imgUrl})`;
            }

            if (this.slidesContainer.children[4] instanceof HTMLDivElement) {
                this.slidesContainer.children[4].style.backgroundImage = `url(${falconPayloadData[activeLinkPayload].imgUrl})`;
            }
        }
    }

    private listenMovementHandler(): void {
        this.btnNext.addEventListener('click', () => {
            if (this.translateXValue < (this.slidesContainer.children.length - 1) * this.translateXStep) {
                this.translateXValue += this.translateXStep;
                this.slidesContainer.style.transform = `translateX(-${this.translateXValue}vw)`;
            }

            if (this.translateXValue >= (this.slidesContainer.children.length - 1) * this.translateXStep) {
                this.btnNext.classList.add('inactive');
            }

            if (this.btnPrev.classList.contains(this.INACTIVE_CLASS)) {
                this.btnPrev.classList.remove(this.INACTIVE_CLASS);
            }

            this.updateDots();
        });

        this.btnPrev.addEventListener('click', () => {
            if (this.translateXValue >= this.translateXStep) {
                this.translateXValue -= this.translateXStep;
                this.slidesContainer.style.transform = `translateX(-${this.translateXValue}vw)`;
            }

            if (this.translateXValue <= 0) {
                this.btnPrev.classList.add(this.INACTIVE_CLASS);
            }

            if (this.btnNext.classList.contains(this.INACTIVE_CLASS)) {
                this.btnNext.classList.remove(this.INACTIVE_CLASS);
            }

            this.updateDots();
        });

        this.dots?.forEach((dot: HTMLDivElement, idx: number, arr: HTMLDivElement[]): void => {
            dot.addEventListener('click', () => {
                arr.forEach((dot: HTMLDivElement, idx: number): void => {
                    if (dot.classList.contains(this.ACTIVE_CLASS)) {
                        dot.classList.remove(this.ACTIVE_CLASS);
                    }
                });

                if (!dot.classList.contains(this.ACTIVE_CLASS)) {
                    dot.classList.add(this.ACTIVE_CLASS);
                }

                this.translateXValue = idx * this.translateXStep;
                this.moveSlider();

                if (this.translateXValue >= (this.slidesContainer.children.length - 1) * this.translateXStep) {
                    if (!this.btnNext.classList.contains(this.INACTIVE_CLASS)) {
                        this.btnNext.classList.add(this.INACTIVE_CLASS);
                    }
                } else {
                    if (this.btnNext.classList.contains(this.INACTIVE_CLASS)) {
                        this.btnNext.classList.remove(this.INACTIVE_CLASS);
                    }
                }

                if (this.translateXValue <= 0) {
                    if (!this.btnPrev.classList.contains(this.INACTIVE_CLASS)) {
                        this.btnPrev.classList.add(this.INACTIVE_CLASS);
                    }
                } else {
                    if (this.btnPrev.classList.contains(this.INACTIVE_CLASS)) {
                        this.btnPrev.classList.remove(this.INACTIVE_CLASS);
                    }
                }
            });
        });
    }
}
