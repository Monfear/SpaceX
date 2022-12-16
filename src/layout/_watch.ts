import { WatchObserver } from "../observers/_watchObserver";
import { Common } from "../utils/common";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

export class Watch extends Common {
    constructor() {
        super();

        new Navbar();
        new Footer();

        new WatchObserver();
    }
}

new Watch();