{
    // map

    const arrayOfNumbers: number[] = [1, 4, 5];

    // manually
    const arrOfString: string[] = ['1', '4', '5'];
    // using map
    const arrOfString2: string[] = arrayOfNumbers.map(
        (number) => number.toString()
    );

    // mapped types

    type AreaNumber = {
        height: number;
        width: number;
    }

    // manually
    type AreaString = {
        height: string;
        width: string;
    }
    // using map
    type AreaString2 = {
        [key in keyof AreaNumber]: string
    }

    // lookup
    type Height = AreaNumber["height"];

    // advance lookup
    type AreaString3<T> = {
        [key in keyof T]: T[key];
    }
    const area: AreaString3<{ height: string; width: number }> = {
        height: "100",
        width: 50,
    }
}