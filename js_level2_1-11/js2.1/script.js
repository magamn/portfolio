//1․ Տրված է ամբողջ թվերի մատրից։ Կարգավորել մատրիցի տողերը, նրանցում դրական տարրերի գումարների աճման կարգով։

var num = [[1, 2, 3], [7, -8, 9], [4, 5, 6]];
var UnsortedArray = [];

for (var i = 0; i < num.length; ++i) {
    var s = 0;
    for (var j = 0; j < num[0].length; ++j) {
        if (num[i][j] > 0) {
            s += num[i][j];
        }
    }
    UnsortedArray.push(s);
}


//for (var i = 0; i < UnsortedArray.length - 1; ++i) {
//    var minIndex = i;
//    for (var j = i + 1; j < UnsortedArray.length; ++j) {
//        if (UnsortedArray[minIndex] > UnsortedArray[j]) {
//            minIndex = j;
//        }
//    }
//    var temp = UnsortedArray[minIndex];
//    UnsortedArray[minIndex] = UnsortedArray[i];
//    UnsortedArray[i] = temp;
//}
UnsortedArray.sort(function(a, b) {return a - b});
console.log(UnsortedArray);