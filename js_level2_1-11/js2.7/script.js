//7․ Հեռացնել տրված իրական թվերի մատրիցի առաջին մեծագույն տարրը պարունակող տողը և սյունը։

var num = [[1, 2, 15], [4, 22, 6], [7, 8, 9]];

var maxrow = 0;
var maxcolumn = 0;
for (var i = 0; i < num.length; ++i) {
    for (var j = 0; j < num[0].length; ++j) {
        if (num[maxrow][maxcolumn] < num[i][j]) {
            maxrow = i;
            maxcolumn = j;
        }
    }
}
num.splice(maxrow, 1);

for (var i = 0; i < num.length; ++i) {
    num[i].splice(maxcolumn, 1); //num[i][maxcolumn];
}
console.log(num);