import { Common } from './common';

class App2 extends Common {
    // private backdrop: HTMLDivElement = document.querySelector('[data-backdrop]') as HTMLDivElement;

    // private hamburgerBtn: HTMLButtonElement = document.querySelector('[data-hamburger]') as HTMLButtonElement;
    // private navbar: HTMLDivElement = document.querySelector('[data-navbar]') as HTMLDivElement;
    // private nav: HTMLElement = document.querySelector('[data-nav]') as HTMLElement;
    // private navLinks: HTMLElement[] = Array.from(document.querySelectorAll<HTMLElement>('.navbar__nav__link'));

    // private arrowUpIcon: HTMLDivElement = document.querySelector('[data-arrowUpIcon]') as HTMLDivElement;

    // private isMenuOpen: boolean = false;

    // private isMobileView: boolean = false;
    // private mobileBreakpoint: number = 768;

    constructor() {
        super();

        this.setupEventsListeners();

        this.checkDevice();
        // this.adjustMediaQueries();

        // this.watchMenuScroll();
    }

    private setupEventsListeners(): void {
        // this.hamburgerBtn.addEventListener('click', this.toggleMenu.bind(this));
        // this.backdrop.addEventListener('click', this.toggleMenu.bind(this));
        // window.addEventListener('scroll', this.watchMenuScroll.bind(this));
        // window.addEventListener('resize', this.checkDevice.bind(this));
        // window.addEventListener('resize', this.adjustMediaQueries.bind(this));
        // this.arrowUpIcon.addEventListener('click', this.movePageTop.bind(this));
    }

    // private checkDevice(): void {
    //     if (window.innerWidth <= this.mobileBreakpoint) {
    //         this.isMobileView = true;
    //     } else {
    //         this.isMobileView = false;
    //     }
    // }

    // private adjustMediaQueries(): void {
    //     if (this.isMobileView) {
    //         this.nav.classList.add('inactive');
    //     } else {
    //         this.nav.classList.remove('inactive');
    //     }
    // }

    // private openMenu(): void {
    //     this.hamburgerBtn.classList.add('active');
    //     this.nav.classList.remove('inactive');
    // }

    // private closeMenu(): void {
    //     this.hamburgerBtn.classList.remove('active');
    //     this.nav.classList.add('inactive');
    // }

    // private toggleMenu(): void {
    //     if (!this.isMenuOpen) {
    //         this.isMenuOpen = true;

    //         this.openMenu();
    //         this.showLinks();
    //         this.openBackdrop();
    //     } else {
    //         this.isMenuOpen = false;

    //         this.closeMenu();
    //         this.hideLinks();
    //         this.closeBackdrop();
    //     }
    // }

    // private showLinks(): void {
    //     this.navLinks.forEach((link: HTMLElement, idx: number, arr: HTMLElement[]): void => {
    //         link.style.opacity = '0';

    //         link.animate(
    //             [
    //                 {
    //                     opacity: 0,
    //                     transform: 'translateY(-1rem)',
    //                 },
    //                 {
    //                     opacity: 1,
    //                     transform: 'translateY(0)',
    //                 },
    //             ],
    //             {
    //                 duration: 300,
    //                 delay: (idx + 1) * 100,
    //                 fill: 'forwards',
    //             }
    //         );
    //     });
    // }

    // private hideLinks(): void {
    //     this.navLinks.forEach((link: HTMLElement, idx: number, arr: HTMLElement[]): void => {
    //         link.style.opacity = '1';

    //         link.animate(
    //             [
    //                 {
    //                     opacity: 1,
    //                 },
    //                 {
    //                     opacity: 0,
    //                 },
    //             ],
    //             {
    //                 duration: 50,
    //                 fill: 'forwards',
    //             }
    //         );
    //     });
    // }

    // private openBackdrop(): void {
    //     this.backdrop.classList.remove('hide');

    //     let opacity: number = 0;

    //     this.backdrop.style.opacity = String(opacity);

    //     let intervalId = setInterval(() => {
    //         opacity += 0.2;

    //         this.backdrop.style.opacity = String(opacity);

    //         if (opacity >= 1) {
    //             clearInterval(intervalId);
    //         }
    //     }, 100);
    // }

    // private closeBackdrop(): void {
    //     this.backdrop.classList.add('hide');
    // }

    // private watchMenuScroll(): void {
    //     if (this.isMobileView) {
    //         if (window.scrollY > this.navbar.offsetHeight) {
    //             this.navbar.classList.add('scrolled');
    //         } else {
    //             this.navbar.classList.remove('scrolled');
    //         }
    //     }
    // }

    // private movePageTop(): void {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth',
    //     });
    // }
}

window.onload = (): void => {
    new App2();
};
