import { StatsObserver } from '../observers/statsObserver';
import { PictureObserver } from '../observers/imageObserver';
import { TextObserver } from '../observers/textObserver';

import { Footer } from '../layout/footer';
import { Navbar } from '../layout/navbar';
import { Falcon2 } from "../layout/falcon2";
import { Header } from "../layout/header";
import { Landing } from "../layout/landing";

export class App {
    constructor() {
        new TextObserver();
        new PictureObserver();
        new StatsObserver();

        new Navbar();
        new Header();
        new Footer();

        new Falcon2();
        new Landing();
    }
}
