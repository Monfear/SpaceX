import { AboutUs } from './aboutUs';
import { Footer } from './footer';
import { Navbar } from './navbar';

export class App {
    constructor() {
        new Navbar();
        new AboutUs();

        new Footer();
    }
}
