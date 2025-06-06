{
    class Counter {
        static count: number = 0;

        increment() {
            return (Counter.count = Counter.count + 1);
        }
        static decrement() {
            return Counter.count = Counter.count - 1;
        }
    }

    const instance1= new Counter();
    console.log(instance1.increment()); // 1

    const instance2 = new Counter();
    console.log(instance2.increment()); // 2

    console.log(Counter.decrement()); // 1
    console.log(Counter.decrement()); // 0
}