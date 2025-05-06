{
    // *****type assertion, type narrowing

    let anything: any;
    anything = "Mahfuz Hasan";
    // (anything as string).
    anything = 111;
    // (anything as number).

    const kgToGm = (value: string | number): string | number | undefined => {
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value)*1000;
            return `The converted value: ${convertedValue}`;
        } else if(typeof value === 'number'){
            return value*1000
        }
    }
    const result1 = kgToGm(1000) as number;
    const result2 = kgToGm("1000") as string;

    type CustomError = {
        message: string
    }
    try{

    } catch(error){
        console.log((error as CustomError).message);
    }
}