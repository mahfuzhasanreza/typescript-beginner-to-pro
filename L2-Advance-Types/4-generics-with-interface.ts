{
    // generic with interface

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        },
        smartWatch: T;
        bike? : X;
    }

    type EmilabWatch = {
        brand: string;
        model: string;
        display: string;
    };

    const poorDeveloper : Developer<EmilabWatch> = {
        name: 'Mahfuz',
        computer: {
            brand: 'hp',
            model: 'pavilion',
            releaseYear: 2000,
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'kw66',
            display: 'Oled'
        }
    }

    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean;
    }

    interface YamahaBike {
        model: string;
        engineCapacity: string;
    }

    const richDeveloper : Developer<AppleWatch, YamahaBike> = {
        name: 'Mahfuz',
        computer: {
            brand: 'hp',
            model: 'pavilion',
            releaseYear: 2000,
        },
        smartWatch: {
            brand: 'Apple',
            model: 'kw66',
            heartTrack: true,
            sleepTrack: true
        },
        bike: {
            model: 'Yamaha',
            engineCapacity: '100cc',
        }
    }

}