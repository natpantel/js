const moneyCount = 1000
const curCurrency = 'руб'
const aimCurrency = 'EUR'

function CurrencyConverter(moneyCount, curCurrency, aimCurrency) {
    const dollarPrice = 73.44;
    const euroPrice = 84.17;
    if (!((curCurrency == 'руб') || (curCurrency == '$') || (curCurrency == 'EUR'))) {
        return null;
    }
    if (!((aimCurrency == 'руб') || (aimCurrency == '$') || (aimCurrency == 'EUR'))) {
        return null;
    }
    if (curCurrency == 'руб') {
        if (aimCurrency == '$') {
            return moneyCount / dollarPrice;
        } else if (aimCurrency == 'EUR') {
            return moneyCount / euroPrice;
        }
    } else if (curCurrency == '$') {
        if (aimCurrency == 'руб') {
            return moneyCount * dollarPrice;
        } else if (aimCurrency == 'EUR') {
            return CurrencyConverter(CurrencyConverter(moneyCount, '$', 'руб'), 'руб', 'EUR');
        }
    } else {
        if (aimCurrency == '$') {
            return CurrencyConverter(CurrencyConverter(moneyCount, 'EUR', 'руб'), 'руб', '$');
        } else if (aimCurrency == 'руб') {
            return moneyCount * euroPrice;
        }        
    }
}