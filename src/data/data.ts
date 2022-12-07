export const falconStagesData: {
    templateText: string,
    imgUrl: string;
}[] = [
        {
            templateText: `
                <p class='slider__slides__slide__content__textContainer__text'>
                    Falcon 9’s first stage incorporates nine Merlin engines and aluminum-lithium
                    alloy tanks containing liquid oxygen and rocket-grade kerosene (RP-1) propellant.
                </p>

                <p class='slider__slides__slide__content__textContainer__text'>
                    Falcon 9 generates more than 1.7 million pounds of thrust at sea level.
                </p>
            `,
            imgUrl: require('./../../img/falcon-first-stage.webp'),
        },
        {
            templateText: `
                <p class='slider__slides__slide__content__textContainer__text'>
                    The nine Merlin  engines on the first stage are gradually throttled near the end of first-stage 
                    flight to limit launch vehicle acceleration as the rocket’s mass decreases with the burning of fuel.
                    These engines are also used to reorient the first stage prior to reentry and to decelerate 
                    the vehicle for landing.
                </p>
            `,
            imgUrl: require('./../../img/falcon-engines.webp'),
        },
        {
            templateText: `
                <p class='slider__slides__slide__content__textContainer__text'>
                    The Falcon 9 first stage is equipped with four landing legs made of state-of-the-art 
                    carbon fiber with aluminum honeycomb.
                </p>

                <p class='slider__slides__slide__content__textContainer__text'>
                    Placed symmetrically around the base of the rocket, they are stowed at the base of the vehicle 
                    and deploy just prior to landing.
                </p>
            `,
            imgUrl: require('./../../img/falcon-legs.webp'),
        }
    ];

export const falconPayloadData: {
    templateText: string,
    templateInfo: string,
    imgUrl: string;
}[] = [
        {
            templateText: `
                <p class='slider__slides__slide__content__textContainer__text'>
                    Made of a carbon composite material, the fairing protects satellites
                    on their way to orbit. The fairing is jettisoned approximately 3 minutes
                    into flight, and SpaceX continues to recover fairings
                    for reuse on future missions.
                </p>
        `,
            templateInfo: `
                <div class="slider__slides__slide__content__info__item">
                    <p class="slider__slides__slide__content__info__item__name">height</p>
                    <p class="slider__slides__slide__content__info__item__value">13.1 m</p>
                </div>
                <div class="slider__slides__slide__content__info__item">
                    <p class="slider__slides__slide__content__info__item__name">diameter</p>
                    <p class="slider__slides__slide__content__info__item__value">5.2</p>
                </div>
        `,
            imgUrl: require('./../../img/falcon-payload-fairing.webp')
        },
        {
            templateText: `
                <p class='slider__slides__slide__content__textContainer__text'>
                    Dragon is capable of carrying up to 7 people and/or cargo in the spacecraft’s pressurized section. 
                    In addition, Dragon can carry cargo in the spacecraft’s unpressurized trunk, 
                    which can also accommodate secondary payloads.
                </p>
        `,
            templateInfo: `
                <div class="slider__slides__slide__content__info__item">
                    <p class="slider__slides__slide__content__info__item__name">height</p>
                    <p class="slider__slides__slide__content__info__item__value">8.1 m</p>
                </div>
                <div class="slider__slides__slide__content__info__item">
                    <p class="slider__slides__slide__content__info__item__name">diameter</p>
                    <p class="slider__slides__slide__content__info__item__value">3.7</p>
                </div>
        `,
            imgUrl: require('./../../img/falcon-payload-dragon.webp')
        },
    ];

export const landingImages: {
    imgUrl: string,
    position: {
        mqXSmall: string,
        mqSmall: string;
        mqXSmallLandscape: string,
        mqSmallLandscape: string,
        mqMedium: string,
        mqBig: string;
    };
}[] = [
        {
            imgUrl: require('./../../img/droneship.jpg'),
            position: {
                mqXSmall: '90% 0',
                mqSmall: '80% 0',
                mqXSmallLandscape: '30% 0',
                mqSmallLandscape: '70% 0',
                mqMedium: '35% 0%',
                mqBig: '0% 0%'
            }
        },
        {
            imgUrl: require('./../../img/landing-zone.jpg'),
            position: {
                mqXSmall: '48% 0',
                mqSmall: '35% 0',
                mqXSmallLandscape: '23% 0',
                mqSmallLandscape: '90% 0',
                mqMedium: '20% 0%',
                mqBig: '0% 0%'
            }
        },
    ];