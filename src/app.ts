import { Footer } from './footer';
import { Navbar } from './navbar';

export class App {
    constructor() {
        new Navbar();
        new Footer();
    }
}
