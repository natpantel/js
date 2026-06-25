const cardNumber = '4561-2612-1234-5464';

function checkCard(cardNumber) {
    const cleanNum = cardNumber.replaceAll('-', '').split('');
    const result = cleanNum.reduce((acc, num, index) => {
        if (index % 2 == 1) {
            acc += Number(num);
        } else {
            let updateNum = Number(num) * 2;
            if (updateNum > 9) {
                updateNum -= 9;
            };
            acc += updateNum;
        };
        return acc;
    }, 0)
    return result % 10 == 0;
}