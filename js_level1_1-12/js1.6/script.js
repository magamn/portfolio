//6․ Տրված է իրական թվերի հաջորդականություն։ Արտածել այդ հաջորդականության այն տարրերի քանակը, որոնք փոքր են իրենց ձախ և աջ հարևանների կիսագումարից։

var arr = [2, 4, 10, 2];

var count = 0;

for (var i = 1; i < arr.length; ++i) {
    var left = arr[i-1];
    var right = arr[i+1];
    var sum = (left + right)/2;
    if (arr[i]< sum) {
        count++;
    }
}

    alert (count);
