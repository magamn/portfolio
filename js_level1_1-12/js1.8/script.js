//8․ Տրված է իրական թվերի հաջորդականություն։ Արտածել Yes, եթե այն հանդիսանում է երկրաչափական պրոգրեսիա։ Հակառակ դեպքում արտածել No։

var arr = [1, 4, 8, 16, 32];
var b = true;
var q = arr[1]/arr[0]

for (var i = 0; i < arr.length - 1; ++i) {
   
    if(arr[i+1] != arr[i]*q) {
       b = false;
    } 
}

if (b){
    alert ("Yes");
}
else{
    alert ("No");
}
