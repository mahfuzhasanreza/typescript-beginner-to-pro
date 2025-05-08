{
    // type guard or type narrowing

    // using typeof
    const add = (param1: string | number, param2: string | number): string | number => {
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString();
        }
    }

    console.log(add(2, 3));
    console.log(add("5", 7));

    // in guard
    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: "admin";
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if('role' in user){
            console.log(`${user.name} is admin`);
        } else{
            console.log(`${user.name} is normal`);
        }
    }

    const normalUser: NormalUser = {
        name: "mahfuz"
    }
    const adminUser: AdminUser = {
        name: "hasan",
        role: "admin"
    }

    getUser(normalUser);
    getUser(adminUser);

}