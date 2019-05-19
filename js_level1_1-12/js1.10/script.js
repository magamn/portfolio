//10․ Տրված է ամբողջ թվերի հաջորդականություն։ Արտածել այդ հաջորդականության առաջին 0-ին հաջորդող  և 1-ով սկսվող թվերի գումարը (եթե հաջորդականությունը 0 չի պարունակում, արտածել NO)։

var arr = [1, 4, 0, 16, 32, 1, 4];
var index;
var sum = 0;
for (var i = 0; i < arr.length; ++i) {
    if(arr[i] == 0) {
        alert(arr[i]);
        index = i + 1;
        break;
        
    }
}

for (index; index < arr.length; ++index) {
    var x = arr[index].toString();
    if (x[0] == '1') {
        sum += arr[index];
    }
}
console.log(sum);