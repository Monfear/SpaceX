import { Common } from "../utils/common";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

class Career extends Common {
    constructor() {
        super();

        new Navbar();
        new Footer();
    }
}

window.onload = function (): void {
    new Career();
};
