function fn(){
    var num = 1;
   	function gn(){
       	console.log(num);
       	num += 2;
    }
    function kn(){
        console.log(num);
        num += 3;
    }
   	num += 4;
    return [gn, kn];
};
gn = fn()[0];
kn = fn()[1];
gn(gn()) * kn(kn());
