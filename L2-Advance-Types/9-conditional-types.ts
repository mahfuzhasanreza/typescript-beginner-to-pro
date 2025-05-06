{
    // conditional types

    type a = null;
    type b = undefined;

    type x = a extends null ? true : false;
    type y = a extends null ? true : b extends undefined ? undefined : any;


    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
    }
    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;
    type hasShip = CheckVehicle<"ship">;
}