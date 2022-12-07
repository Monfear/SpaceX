import { Common } from "../utils/common";
import { landingImages } from "../data/data";

export class Landing extends Common {
    private navLinks: HTMLSpanElement[] = [...document.querySelectorAll<HTMLSpanElement>('.Landing .tabs__tab')];
    private backgroundImg: HTMLDivElement = this.getElementByDataset('landing-backgroundImg')!;

    constructor() {
        super();

        this.navLinks[0].classList.add(this.ACTIVE_CLASS);

        this.navLinks.forEach((link: HTMLSpanElement, idx: number, arr: HTMLSpanElement[]) => {
            this.adjustBackgroundPosition();
        });

        window.addEventListener('resize', () => {
            this.adjustBackgroundPosition();
        });

        this.changeBackgroundHandle();
    }

    private changeBackgroundHandle(): void {
        this.navLinks.forEach((link: HTMLSpanElement, idx: number, arr: HTMLSpanElement[]): void => {
            link.addEventListener('click', (): void => {
                arr.forEach((link: HTMLSpanElement) => {
                    if (link.classList.contains(this.ACTIVE_CLASS)) {
                        link.classList.remove(this.ACTIVE_CLASS);
                    }
                });

                link.classList.add(this.ACTIVE_CLASS);

                this.backgroundImg.style.backgroundImage = `url('${landingImages[idx].imgUrl}')`;

                this.adjustBackgroundPosition();
            });
        });
    }

    private adjustBackgroundPosition(): void {

        const activeTabIdx: number = this.navLinks.findIndex((link: HTMLSpanElement): boolean => {
            return link.classList.contains(this.ACTIVE_CLASS);
        });

        if (this.isMobileView) {
            if (window.innerHeight <= 640 && window.innerWidth <= 360) {
                this.backgroundImg.style.backgroundPosition = landingImages[activeTabIdx].position.mqXSmall;
            } else if (window.innerHeight <= 360 && window.innerWidth <= 640) {
                this.backgroundImg.style.backgroundPosition = landingImages[activeTabIdx].position.mqXSmallLandscape;
            } else if (window.innerHeight <= 360 && window.innerWidth > 640) {
                this.backgroundImg.style.backgroundPosition = landingImages[activeTabIdx].position.mqSmallLandscape;
            } else if (window.innerHeight > 640 && window.innerWidth < 768) {
                this.backgroundImg.style.backgroundPosition = landingImages[activeTabIdx].position.mqSmall;
            } else if (window.innerHeight > 640 && window.innerWidth >= 768) {
                this.backgroundImg.style.backgroundPosition = landingImages[activeTabIdx].position.mqMedium;
            }
        } else {
            this.backgroundImg.style.backgroundPosition = landingImages[activeTabIdx].position.mqBig;
        }
    }
}