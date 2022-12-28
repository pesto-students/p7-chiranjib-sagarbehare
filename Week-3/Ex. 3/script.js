function createIncrement() {
    let count = 0;
    function increment() {
        count++;
    }
    
    let message = `Count is ${count}`;
    function log() {
        console.log(message);
    }
    return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();// What is logged?


/**
    OutPut: Count is 0
    
    message variable defined out side log() that why incremented count value not getting.
    
    If we want updated value of Count in that case we need to define message variable inside log().

    function log() {
        let message = `Count is ${count}`;
        console.log(message);
    }
 */