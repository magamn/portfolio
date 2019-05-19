//2. Տրված է բնական թվերի մատրից։ Կառուցել և արտածել միաչափ զանգված, որը պարունակում է մատրիցի բոլոր այն տողերի կարգահամարները, որոնցում կա 2-ի աստիճան հանդիսացող գոնե մեկ թիվ։

var num = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var index = [];
var k = 0;

function is_power(a) {
    if (a == 1) {
        return true;
    }
    else if (a < 1) {
        return false;
    }
    return is_power(a / 2);
}

for (var i = 0; i < num.length; ++i) {
    for (var j = 0; j < num[0].length; ++j) {
        if (is_power(num[i][j])) {
            index.push(k);
        }
        ++k;
    }
}
console.log(index);
