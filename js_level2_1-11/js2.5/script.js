//5․ Տրված է ամբողջ թվերի մատրից։ Կառուցել և արտածել միաչափ զանգված, որի i-րդ տարրը հավասար է մատրիցի i-րդ տողի բացասական տարրերի քանակին։

var num = [[999, 14, 3003], [4, -5, 6], [7, -8, 9]];
var arr = Array(num.length).fill(0);

for (var i = 0; i < num.length; ++i) {
    var count = 0;
    for (var j = 0; j < num[0].length; ++j) {
        if (num[i][j] < 0) {
            ++count;
        }
    }
    arr[i] = count;
}
console.log(arr);