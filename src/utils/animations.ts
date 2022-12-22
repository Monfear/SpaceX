// @ text
type TextKeyframes = {
    opacity: number,
    transform: string;
}[];

type TextAnimations = {
    hideText(element: HTMLElement): void,
    showText(element: IntersectionObserverEntry['target']): void;
};

const textKeyframes: TextKeyframes = [
    {
        opacity: 0,
        transform: 'translateY(20px)',
    },
    {
        opacity: 1,
        transform: 'translateY(0)',
    },
];

export const textAnimations: TextAnimations = {
    showText: (element: IntersectionObserverEntry['target']): void => {
        element.animate(textKeyframes, {
            fill: 'forwards',
            duration: 1000,
        });
    },

    hideText: (element: HTMLElement): void => {
        element.animate(textKeyframes, {
            fill: 'forwards',
            duration: 1,
            direction: 'reverse',
        });
    },
};

// @ video
type VideoKeyframes = {
    scale: number,
    filter: string;
}[];

type VideoAnimations = {
    showVideo: (element: HTMLPictureElement) => void,
    hideVideo: (element: HTMLPictureElement) => void,
};

const videoKeyframes: VideoKeyframes = [
    {
        scale: 0,
        filter: 'hue-rotate(180deg)'
    },
    {
        scale: 1,
        filter: 'hue-rotate(0deg)'
    }
];

export const videoAnimations: VideoAnimations = {
    showVideo: (element: HTMLPictureElement): void => {
        element.animate(videoKeyframes, {
            duration: 1500,
            fill: 'forwards',
        });
    },

    hideVideo: (element: HTMLPictureElement): void => {
        element.animate(videoKeyframes, {
            duration: 1,
            direction: 'reverse',
            fill: 'forwards'
        });
    }
};