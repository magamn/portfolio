//12․ Տրված է ամբողջ թվերի մատրից։ Արտածել գլխավոր անկյունագծից ներքև կամ նրա վրա գտնվող զույգ արժեք ունեցող տարրերի միջին թվաբանականը։

var arr = [[3, 5, 6], [1, 6, 6], [1, 5, 6]];
var count = 0;
var sum = 0;

for (var i = 0; i < arr.length; ++i) {
    for (var j = 0; j <= i; ++j){
       if (arr[i][j] % 2 == 0) {
            sum += arr[i][j];
            ++count;
    }
}
}
//console.log(arr);
console.log(sum/count);



