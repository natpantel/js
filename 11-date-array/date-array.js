const dateArray = ["10-02-2022", "тест", "11/12/2023", "00/13/2022", "41/12/2023"];

function filterArray(array) {
    const newArray = [];
    array.forEach((element) => {
        if (isDate(element)) {
            newArray.push(element);
        }
    })
    return newArray;
}

function isDate(element) {
    if (element.length != 10) {
        return false;
    } 
    const separator = element[2];
    if (separator != '-' && separator != '/') {
        return false;
    }
    const splitDate = element.split(element[2]);
    if (splitDate.length != 3) {
        return false;
    }
    if (Number(splitDate[0]) < 0 || Number(splitDate[0]) > 31) {
        return false;
    }
    if (Number(splitDate[1]) < 0 || Number(splitDate[1]) > 12) {
        return false;
    }
    return true
}