function result(e) {
    const num1 = Number(document.querySelector('input:nth-child(1)').value);
    const num2 = Number(document.querySelector('input:nth-child(2)').value);
    const oper = e.innerText;
    let result = 0;
    switch (oper) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;              
    }
    document.querySelector('input:nth-child(1)').value = '';
    document.querySelector('input:nth-child(2)').value = '';
    document.querySelector('p').innerText = result

}