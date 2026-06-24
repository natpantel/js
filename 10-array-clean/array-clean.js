function arrayClean(arr, cleanF) {
    const newArr = [];
    arr.forEach(element => {
        if (!cleanF(element)) {
            newArr.push(element);
        }
    });
    return newArr;
}