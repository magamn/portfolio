//1․ Տրված է ամբողջ թվերի հաջորդականություն։ Արտածել այդ հաջորդականության վերջին երկնիշ տարրը և դրան հաջորդող կենտ տարրերի քանակը։

var num = [1, 4, 8, 7, 80, 2, 8, 3, 3, 3];

var count = 0;
var index = 0;


for (var i = num.length - 1; i >= 0; --i) {
    var con = 0;
    var x = num[i];
    while (x != 0) {
        ++con;
        x = Math.floor(x / 10);
        if (con > 2){
            break;
        }
    }
    if (con == 2){
        alert(num[i]);
        index = i + 1;
        break;
    }
}
for (index; index < num.length; ++index){
    if (num[index]%2 != 0){
        ++count;
       
    }
}
console.log(count);