//9․ Տրված է ամբողջ թվերի հաջորդականություն։ Արտածել այդ հաջորդականության 7-ից մեծ վերջին տարրը և դրան նախորդող զույգ տարրերի արտադրյալը։

var arr = [1, 4, 8, 16, 32, 2, 4];
var index;
var sum = 1;
for (var i = arr.length - 1; i >= 0; --i) {
    if(arr[i] > 7) {
        alert(arr[i]);
        index = i - 1;
        break;
        
    }
}
for (var index; index >= 0; --index){
    
   if(arr[index]%2 == 0) {
        sum *= arr[index];
   }
}
alert(sum);
