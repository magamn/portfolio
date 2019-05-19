// 8․ Տրված է իրական թվերի հաջորդականություն։ Արտածել այդ հաջորդականության աճման կարգով դասավորված իրար հաջորդող տարրերի ամենաերկար ենթահաջորդականության երկարությունը։

var num = [1, 2, 1, 4, 5, 6, 7, 8, 6];
var count = [];
var x = 0;

for (var i = 0; i < num.length - 1; ++i) {
    if (num[i] >= num[i + 1]) {
        count.push(x);
        x = 0;
        continue;
    }
    ++x;
}
if (x != 0) {
    count.push(x);
}
var maxIndex = 0;
for (var i = 0; i < count.length; ++i) {
    if (count[maxIndex] < count[i]) {
        maxIndex = i;
    }
}
console.log(count[maxIndex] + 1);