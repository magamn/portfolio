//3․ Տրված է իրական թվերի հաջորդականություն։ Արտածել Yes, եթե նրանում դրական տարրերի քանակը մեծ է բացասական տարրերի քանակից։ Հակառակ դեպքում արտածել No։

var num = [1, 4, 5, -6, -7, -8];

var count = 0;

for (var i = 0; i < num.length; ++i) {
    if(num[i] > 0)
        ++count;
    
    else if (num[i] < 0)
        --count;
}
if(count > 0){
    alert("YES");
}
else if (count < 0){
    alert("NO");
}
else 
    alert("Equal");