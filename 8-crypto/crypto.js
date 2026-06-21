function crypto(password) {
    if (password.length == 8) {
        const [a, b, c, d, e, f, g, h] = password.split('');
        return [c, d, b, a, h, f, g, e].join('')
    }
    return null;
} 

function check(criptedPassport, originalPassport) {
    if (criptedPassport.length == 8) {
        const [c, d, b, a, h, f, g, e] = criptedPassport.split('');
        if ([a, b, c, d, e, f, g, h].join('') == originalPassport) {
            return true;
        } else {
            return false;
        }       
    }
    return null;
}
