protected getElementByDataset(dataset: string): HTMLParagraphElement {
        const datasetSelector: string = `[data-selector='${dataset}']`;

        const element: HTMLParagraphElement = document.querySelector(datasetSelector) as HTMLParagraphElement;

        console.log(element);
        return element;
    }