{
    // generic interface:

    interface IDeveloper<T, Q = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        }
        smartWatch: T,
        bike?: Q
    }


    const poorDev: IDeveloper<{
        brand: string;
        model: string;
        display: string;
    }> = {
        name: "Shovan",
        computer: {
            brand: 'Asus',
            model: 'XYW',
            releaseYear: 2019
        },
        smartWatch: {
            brand: 'Emilab',
            model: 'Kw66',
            display: 'IPS'
        }
    }


    const richDev: IDeveloper<{
        brand: string;
        model: string;
        display: string;
        sleepTrack: boolean
    }, {
        model: string;
        engine: number
    }> = {
        name: "Shovan",
        computer: {
            brand: 'Hp',
            model: 'XYW',
            releaseYear: 2019
        },
        smartWatch: {
            brand: 'Apple',
            model: '1',
            display: 'OLED',
            sleepTrack: true,
        },
        bike: {
            model: 'YAMAHA',
            engine: 100
        }
    }
}