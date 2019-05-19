//4․ Տրված է իրական թվերի հաջորդականություն։ Արտածել այդ հաջորդականության առաջին մեծագույն և վերջին փոքրագույն տարրերի միջև գտնվող անդամների գումարը։

var arr = [1, 2, 5, 2, 3, 10, 1, 3, 5, 1];
var count = 0;
var maxIndex = 0;

for (var i = 0; i < arr.length; ++i) {
		if (arr[i] > arr[maxIndex]) {
    		maxIndex = i;
    }
}
var minIndex = arr.length - 1;
for (var i = arr.length - 1; i > maxIndex; --i) {
		if (arr[minIndex] > arr[i]) {
    		minIndex = i;
    }
}

for (var i = maxIndex + 1; i < minIndex; ++i) {
		count += arr[i];
}
alert(maxIndex);