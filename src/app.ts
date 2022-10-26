import { AboutUs } from './sections/aboutUs';
import { Footer } from './sections/footer';
import { Navbar } from './sections/navbar';

export class App {
    constructor() {
        new Navbar();
        new AboutUs();

        new Footer();
    }
}
