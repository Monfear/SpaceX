import { Common } from "../utils/common";

class Career extends Common {
    constructor() {
        super();

        console.log('career');
    }
}

window.onload = function (): void {
    new Career();
};
