import { StatsObserver } from './observers/commonObserver';
import { PictureObserver } from './observers/imageObserver';
import { TextObserver } from './observers/textObserver';
import { AboutUs } from './sections/aboutUs';
import { Footer } from './sections/footer';
import { Navbar } from './sections/navbar';

export class App {
    constructor() {
        new TextObserver();
        new PictureObserver();
        new StatsObserver();

        new Navbar();
        new AboutUs();

        new Footer();
    }
}
