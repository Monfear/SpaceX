import { Common } from "../utils/common";
import { falconStagesData, falconPayloadData } from "../data/data";

export class Falcon2 extends Common {
    private btnPrev: HTMLSpanElement = document.querySelector('[data-falcon-2-slider-btnPrev]') as HTMLSpanElement;
    private btnNext: HTMLSpanElement = document.querySelector('[data-falcon-2-slider-btnNext]') as HTMLSpanElement;

    private slidesContainer: HTMLDivElement = document.querySelector('[data-falvon-2-slider-slides]') as HTMLDivElement;

    private navLinksStages: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>('[data-slider-link-stages]'));
    private textContainerStages: HTMLDivElement = document.querySelector('[data-slider-textContainer-stages]') as HTMLDivElement;
    private pictureStages: HTMLDivElement = document.querySelector('[data-slider-firstStage-img-stages]') as HTMLDivElement;

    private navLinksPayload: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>('[data-slider-link-payload]'));
    private textContainerPayload: HTMLDivElement = document.querySelector('[data-slider-textContainer-payload]') as HTMLDivElement;
    private infoContainerPayload: HTMLDivElement = document.querySelector('[data-slider-info-payload]') as HTMLDivElement;
    private picturePayload: HTMLDivElement = document.querySelector('[data-slider-img-payload]') as HTMLDivElement;


    constructor() {
        super();

        this.navLinksStages[0].classList.add(this.ACTIVE_CLASS);
        this.navLinksPayload[0].classList.add(this.ACTIVE_CLASS);

        this.adjustContent();
        this.moveSlides();

        if (this.slidesContainer.style.transform === '') {
            this.btnPrev.classList.add(this.INACTIVE_CLASS);
        }

        window.addEventListener('resize', this.checkBackground.bind(this));
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

    private moveSlides(): void {
        let translateXValue: number = 0;

        this.btnNext.addEventListener('click', () => {
            if (translateXValue < (this.slidesContainer.children.length - 1) * 100) {
                translateXValue += 100;
                this.slidesContainer.style.transform = `translateX(-${translateXValue}vw)`;
            }

            if (translateXValue >= (this.slidesContainer.children.length - 1) * 100) {
                this.btnNext.classList.add('inactive');
            }

            if (this.btnPrev.classList.contains(this.INACTIVE_CLASS)) {
                this.btnPrev.classList.remove(this.INACTIVE_CLASS);
            }
        });

        this.btnPrev.addEventListener('click', () => {
            if (translateXValue >= 100) {
                translateXValue -= 100;
                this.slidesContainer.style.transform = `translateX(-${translateXValue}vw)`;
            }

            if (translateXValue <= 0) {
                this.btnPrev.classList.add(this.INACTIVE_CLASS);
            }

            if (this.btnNext.classList.contains(this.INACTIVE_CLASS)) {
                this.btnNext.classList.remove(this.INACTIVE_CLASS);
            }
        });
    }

}
