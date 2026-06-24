const arr = [1, 40, -5, 10, 0];

function sortArray(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minNum = arr[i];
        for (let j = i + 1; j < arr.length; j++) {
            if (minNum > arr[j]) {
                let temp = minNum;
                minNum = arr[j];
                arr[i] = minNum;
                arr[j] = temp;
                console.log(arr);
            }
        }
    }
    return arr;
}