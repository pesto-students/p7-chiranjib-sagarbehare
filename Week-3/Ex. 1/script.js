const memoizedAdd = () => {
    let cache = {};
    return (n, m) => {
        console.log('value of n :'+n);
        
        if (n+"_"+m in cache) {
            console.log('Fetching from cache');
            return cache[n+"_"+m];
        } else {
            console.log('Calculating result');
            let result = n + m;
            cache[n+"_"+m] = result;
            return result;
        }
    }
}

const newAdd = memoizedAdd();
console.log(newAdd(101,100)); // calculated
console.log(newAdd(50,100)); // calculated
console.log(newAdd(50,100)); // calculated
