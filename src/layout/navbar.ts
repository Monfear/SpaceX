import { Backdrop } from './backdrop';
import { Common } from '../utils/common';

export class Navbar extends Common {
    private hamburgerBtn: HTMLButtonElement = document.querySelector('[data-hamburger]') as HTMLButtonElement;
    private navbar: HTMLDivElement = this.getElementByDataset('navbar')!;
    private nav: HTMLElement = document.querySelector('[data-nav]') as HTMLElement;
    private navLinks: HTMLElement[] = Array.from(this.nav.querySelectorAll<HTMLElement>('a'));

    private backdrop: Backdrop = new Backdrop();

    private isMenuOpen: boolean | undefined = undefined;

    constructor() {
        super();

        this.setupEventsListeners();
        this.adjustMediaQueries();

        this.watchMenuScroll();
    }

    private setupEventsListeners(): void {
        window.addEventListener('scroll', this.watchMenuScroll.bind(this));
        window.addEventListener('resize', this.adjustMediaQueries.bind(this));

        this.hamburgerBtn.addEventListener('click', this.toggleMenu.bind(this));

        this.backdrop.backdropEl.addEventListener('click', () => {
            this.isMenuOpen = false;

            this.backdrop.closeBackdrop();

            this.nav.classList.add('inactive');
            this.hamburgerBtn.classList.remove('active');
        });
    }

    private adjustMediaQueries(): void {
        if (this.isMobileView) {
            this.isMenuOpen = false;

            this.hamburgerBtn.classList.remove('active');
            this.nav.classList.add('inactive');

            if (!this.backdrop.backdropEl.classList.contains('hide')) {
                this.backdrop.closeBackdrop();
            }
        } else {
            this.isMenuOpen = true;

            this.nav.classList.remove('inactive');

            if (!this.backdrop.backdropEl.classList.contains('hide')) {
                this.backdrop.closeBackdrop();
            }

            if (this.navbar.classList.contains('scrolled')) {
                this.navbar.classList.remove('scrolled');
            }
        }
    }

    private watchMenuScroll(): void {
        if (this.isMobileView) {
            if (window.scrollY > this.navbar.offsetHeight) {
                this.navbar.classList.add('scrolled');
            } else {
                this.navbar.classList.remove('scrolled');
            }
        }
    }

    private toggleMenu(): void {
        if (!this.isMenuOpen) {
            this.isMenuOpen = true;

            this.hamburgerBtn.classList.add('active');
            this.nav.classList.remove('inactive');

            this.showLinks();

            this.backdrop.openBackdrop();
        } else {
            this.isMenuOpen = false;

            this.hamburgerBtn.classList.remove('active');
            this.nav.classList.add('inactive');

            if (!this.backdrop.backdropEl.classList.contains('hide')) {
                this.backdrop.closeBackdrop();
            }
        }
    }

    private showLinks(): void {
        this.hideLinks();

        this.navLinks.forEach((link: HTMLElement, idx: number, arr: HTMLElement[]): void => {
            link.animate(
                [
                    {
                        opacity: 0,
                        transform: 'translateY(-1rem)',
                    },
                    {
                        opacity: 1,
                        transform: 'translateY(0)',
                    },
                ],
                {
                    duration: 300,
                    delay: (idx + 1) * 100,
                    fill: 'forwards',
                }
            );
        });
    }

    private hideLinks(): void {
        this.navLinks.forEach((link: HTMLElement, idx: number, arr: HTMLElement[]): void => {
            link.animate(
                [
                    {
                        opacity: 1,
                    },
                    {
                        opacity: 0,
                    },
                ],
                {
                    duration: 0,
                    fill: 'forwards',
                }
            );
        });
    }
}
