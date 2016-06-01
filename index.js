var a = Number(prompt('Enter A:'));
var b = Number(prompt('Enter B:'));
var c = Number(prompt('Enter C:'));

alert(sqr(a,b,c));

function sqr(a,b,c){
    var d = b*b - 4*a*c;
    if(d>0){
        var x1= (-b+Math.sqrt(d)) / (2*a);
        var x2 = (-b-Math.sqrt(d)) / (2*a);
        
        return x1=${x1}, x2=${x2}`;
    }else if (d===0) {
        var x = -b / (2*a);
        return x=${x};
    }else {
        return 'no found';
    }
}