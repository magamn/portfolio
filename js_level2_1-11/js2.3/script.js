//3․ Տրված է բնական թվերի մատրից։ Կառուցել և արտածել միաչափ զանգված, որի i-րդ տարրը հավասար է մատրիցի i-րդ տողի այն թվերի միջին թվաբանականին, որոնց հազարավորների թվանշանը հավասար է միավորների թվանշանին։

var num = [[1001, 2, 3003], [4, 5, 6], [7, 8, 9]];

function digit(n) {
    if (n >= 1000) {
        while (n != 0) {
            if (Math.floor(n / 10000) == 0) {
                var x = n % 10;
                if (x == Math.floor(n / 1000) % 10) {
                    return true;
                }
                return false;
            }
            n = Math.floor(n / 10);
        }
    }
    return false;
}

var count = 0;
var sum = 0;

for (var i = 0; i < num.length; ++i) {
    for (var j = 0; j < num[0].length; ++j) {
        if (digit(num[i][j])) {
            sum += num[i][j];
            ++count;
            
        }
    }
}

console.log(sum / count);
