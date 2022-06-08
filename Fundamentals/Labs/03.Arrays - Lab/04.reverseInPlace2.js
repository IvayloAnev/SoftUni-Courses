function solve(arr) {
    for (i = 0; i < arr.length / 2; i++) {
        let buffer = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = buffer;
    }
    console.log(arr.join(' '));

}
solve(['abc', 'def', 'hig', 'klm', 'nop'])