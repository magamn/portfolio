//4․ Տրված է բնական թվերի մատրից։ Կառուցել և արտածել միաչափ զանգված, որի i-րդ տարրը հավասար է true, եթե i-րդ սյան մեջ կա գոնե մեկ թիվ, որի 16-ական ներկայացումը պարունակում է E սիմվոլը և հավասար է  false հակառակ դեպքում։

var num = [[14, 14, 3003], [4, 5, 6], [7, 8, 14]];
var arr = Array(num.length * num[0].length).fill(false);
function hexdecimal(n) {
    var hexstring = n.toString(16);
    if (hexstring.indexOf("e") != -1) {
        return true;
    }
    return false;
}
var k = 0;
for (var i = 0; i < num.length; ++i) {
    for (var j = 0; j < num[0].length; ++j) {
        if (hexdecimal(num[i][j])) {
            arr[k] = true;
        }
        ++k;
    }
}
console.log(arr);