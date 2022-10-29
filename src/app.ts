import { StatsObserver } from './observers/statsObserver';
import { PictureObserver } from './observers/imageObserver';
import { TextObserver } from './observers/textObserver';

import { Footer } from './sections/footer';
import { Navbar } from './sections/navbar';

export class App {
    constructor() {
        new TextObserver();
        new PictureObserver();
        new StatsObserver();

        new Navbar();

        new Footer();
    }
}
