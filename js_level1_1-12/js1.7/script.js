//7․ Տրված է իրական թվերի հաջորդականություն։ Արտածել Yes, եթե այն հանդիսանում է սիմետրիկ հաջորդականություն։ Հակառակ դեպքում արտածել No։

var arr = [1, 2, 3, 4, 4, 3, 2, 9];
var arr1 = [];
var  bool = true;


for (var i = arr.length-1; i >= 0; --i) {
    arr1.push(arr[i]);

}

for (var i = 0; i < arr.length; ++i) {
    if (arr[i] != arr1[i]) {
        bool = false;
        break;
    }
}

if (bool){
    alert("yes")
}
else{
    alert("no")
}
