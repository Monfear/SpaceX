import { Backdrop } from './backdrop';
import { Common } from './common';

export class Navbar extends Common {
    private hamburgerBtn: HTMLButtonElement = document.querySelector('[data-hamburger]') as HTMLButtonElement;
    private navbar: HTMLDivElement = document.querySelector('[data-navbar]') as HTMLDivElement;
    private nav: HTMLElement = document.querySelector('[data-nav]') as HTMLElement;
    private navLinks: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>('.navbar__nav__link'));

    private backdrop: Backdrop = new Backdrop();

    private isMenuOpen: boolean = false;

    constructor() {
        super();

        this.setupEventsListeners();
        this.adjustMediaQueries();
    }

    private setupEventsListeners(): void {
        window.addEventListener('scroll', this.watchMenuScroll.bind(this));
        window.addEventListener('resize', this.adjustMediaQueries.bind(this));

        this.hamburgerBtn.addEventListener('click', this.toggleMenu.bind(this));
        this.backdrop.backdropEl.addEventListener('click', this.toggleMenu.bind(this));
    }

    private adjustMediaQueries(): void {
        if (this.isMobileView) {
            this.nav.classList.add('inactive');
        } else {
            this.nav.classList.remove('inactive');
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

    private openMenu(): void {
        this.hamburgerBtn.classList.add('active');
        this.nav.classList.remove('inactive');
    }

    private closeMenu(): void {
        this.hamburgerBtn.classList.remove('active');
        this.nav.classList.add('inactive');
    }

    public toggleMenu(): void {
        if (!this.isMenuOpen) {
            this.isMenuOpen = true;

            this.openMenu();
            this.showLinks();
            this.backdrop.openBackdrop();
        } else {
            this.isMenuOpen = false;

            this.closeMenu();
            this.hideLinks();
            this.backdrop.closeBackdrop();
        }
    }

    private showLinks(): void {
        this.navLinks.forEach((link: HTMLElement, idx: number, arr: HTMLElement[]): void => {
            link.style.opacity = '0';

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
            link.style.opacity = '1';

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
                    duration: 50,
                    fill: 'forwards',
                }
            );
        });
    }
}
