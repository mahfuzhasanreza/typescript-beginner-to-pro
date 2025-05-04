{
    // nullable types
    const searchName = (value: string | null) => {
        if(value){
            console.log("Searching");
        } else {
            console.log("No search");
        }
    };
    searchName(null);

    // unknown types
    // It can be determine type at runtime. As like JS typeof operator.
    const getSpeedInMeterPerSecond = (value: unknown) => {
        if(typeof value === 'number'){
            const convertedSpeed = (value * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        } else if(typeof value === 'string'){
            const [result, unit] = value.split(' ');
            const convertedSpeed = (parseFloat(result) * 1000) / 3600;
            console.log(`The speed is ${convertedSpeed} ms^-1`);
        } else {
            console.log(`Wrong input`);
        }
    }
    getSpeedInMeterPerSecond(1000);
    getSpeedInMeterPerSecond(`1000 kmh^-1`);
    getSpeedInMeterPerSecond(null);

    // never type
    const throwError = (msg: string): never => {
        throw new Error(msg);
    }
    throwError('Have error');
}