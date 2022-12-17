import { WatchObserver } from "../observers/_watchObserver";
import { Common } from "../utils/common";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

class Watch extends Common {
    constructor() {
        super();

        new Navbar();
        new Footer();

        new WatchObserver();
    }
}

window.onload = function (): void {
    new Watch();
};
