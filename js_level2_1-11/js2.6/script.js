//6․ Հեռացնել տրված բնական թվերի մատրիցի բոլոր այն տողերը, որոնց տարրերը փոխադարձաբար պարզ են սյան կարգահամարի հետ (բացառությամբ 0 կարգահամարով տարրից)։
//

var num = [[1, 22, 15], [4, 5, 6], [7, 8, 9]];
var arr = Array(num.length).fill(0);

function gcd(a, b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a % b);
}

for (var i = 0; i < num.length; ++i) {
    var count = 0;
    for (var j = 0; j < num[0].length; ++j) {
        if (gcd(num[i][j], j) == 1 && j != 0) {
            num.splice(0, num[0].length);
            break;
        }
    }
}
console.log(num);